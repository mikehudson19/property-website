import { Component, OnDestroy, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { IAdvert } from "@app/_models/IAdvert";
import { InMemoryAdvertService } from "@app/_mockServices/inMemoryAdvert.service";
import { InMemoryLocationService } from "@app/_mockServices/inMemoryLocation.service";
import { Subject, Subscription } from "rxjs";
import { Advert } from "@app/_models/advert";
import { debounceTime } from "rxjs/operators";
import { AdvertService } from "@app/_services/advert.service";
import { LocationService } from "@app/_services/location.service";
import { CustomValidators } from '@app/_helpers/customValidators';
import { ILocation } from '@app/_models/ILocation';
import { AuthenticationService } from "@app/_services";
import jwt_decode from "jwt-decode";
import { invalidInputs } from "@app/shared/utils";

@Component({
  selector: "app-edit-advert",
  templateUrl: "./edit-advert.component.html",
  styleUrls: ["./edit-advert.component.scss"],
})
export class EditAdvertComponent implements OnInit, OnDestroy {
  locations = ['Gauteng', 'North West', 'Northern Cape', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Free State', 'Mpumalanga', 'KwaZulu-Natal'];
  editAdvertForm: FormGroup;
  sub: Subscription = new Subscription();
  province: string;
  cities: String[] = [];
  id: number;
  advert: IAdvert;
  isConfirm: boolean = false;
  validationMessage: {
    [key: string]: string;
  } = {};
  alertMessage: string = "";
  canExit$: Subject<boolean> = new Subject<boolean>(); 
  exitConfirm: boolean = false;

  validationMessages: {} = {
    title: {
      required: "An advert title is required.",
      minlength: "Your advert title must be at least 10 characters long.",
      maxlength: "Your advert title cannot be longer than 100 characters",
      multipleSpaceValidator: "Your advert title cannot have consecutive spaces"
    },
    province: {
      required: "Your province is required.",
    },
    city: {
      required: "Your city is required.",
    },
    details: {
      required: "Advert details are required.",
      minlength: "Your advert details need to be at least 10 characters long.",
      maxlength: "Your advert details cannot be longer than 1000 characters.",
      multipleSpaceValidator: "Your advert details cannot have consecutive spaces"
    },
    price: {
      required: "An advert price is required.",
      min: "The minimum advert price is R10 000",
      max: "The maximum advert price is R100,000,000",
      noSpaceValidator: "Your price cannot contain spaces",
      onlyNumbers: "Your price can only contain numbers"
    },
    bedrooms: {
      required: "Bedrooms are required",
      min: "Cannot be less than 0"
    },
    bathrooms: {
      required: "Bathrooms are required",
      min: "Cannot be less than 0"
    },
    parkingSpaces: {
      required: "Parkings are required",
      min: "Cannot be less than 0"
    }
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _advertService: AdvertService,
    private _locationService: LocationService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.editAdvertForm = this._formBuilder.group({
      title: [
        this.advert?.title,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator
        ],
      ],
      province: [this.advert?.province, [Validators.required]],
      city: [this.advert?.city, [Validators.required]],
      details: [
        this.advert?.details,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
          CustomValidators.multipleSpaceValidator
        ],
      ],
      price: [
        this.advert?.price,
        [Validators.required, Validators.min(10000), Validators.max(100000000), CustomValidators.noSpaceValidator, CustomValidators.onlyNumbers],
      ],
      bedrooms: [
        this.advert?.bedrooms,
        [Validators.required, Validators.min(0)]
      ],
      bathrooms: [
        this.advert?.bathrooms,
        [Validators.required, Validators.min(0)]
      ],
      parkingSpaces: [
        this.advert?.parkingSpaces,
        [Validators.required, Validators.min(0)]
      ]
    });

    this.sub.add(
      this.editAdvertForm.get("province").valueChanges.subscribe((value) => {
        this.province = value;
        this.getCities();
      })
    );

    // Get the advert ID from the route parameter
    this.sub.add(
      this._route.paramMap.subscribe((params) => {
        this.id = +params.get('id');
        this.getAdvert(this.id);
      })
    );

    this.sub.add(
      this.editAdvertForm.valueChanges
        .pipe(debounceTime(600))
        .subscribe(
          (value) =>
            (this.validationMessage = invalidInputs(this.editAdvertForm, this.validationMessages))
        )
    );
  }

  getCities(): void {
    this.cities = [];
    this._locationService.list().subscribe(cities => {
      /** @Note: Can replace this at some stage with a query param sent to the API */
      cities.forEach(city => {
        if (this.province === city.province) {
          this.cities?.push(city.name);
        }
      })
    });
  }

  getAdvert(id: number): void {
    this._advertService
    .getAdvert(id).subscribe((advert) => {
      this.advert = advert;
      this.displayAdvert();
    });
  }

  displayAdvert(): void {

    this.editAdvertForm.patchValue({
      title: this.advert.title,
      province: this.advert.province,
      city: this.advert.city,
      details: this.advert.details,
      price: this.advert.price,
      bedrooms: this.advert.bedrooms,
      bathrooms: this.advert.bathrooms,
      parkingSpaces: this.advert.parkingSpaces
    });
  }

  createAdvert(): void {
    /** @TODO: Hack for now - need to move this userId to the API at some stage */
    const currentUser = this.authenticationService.currentUserValue;

    const advert = new Advert(
      this.editAdvertForm.get("title").value.trim(),
      this.editAdvertForm.get("province").value.trim(),
      this.editAdvertForm.get("city").value.trim(),
      this.editAdvertForm.get("price").value.trim(),
      this.editAdvertForm.get("details").value.trim(),
      this.editAdvertForm.get("bedrooms").value,
      this.editAdvertForm.get("bathrooms").value,
      this.editAdvertForm.get("parkingSpaces").value,
      'Live',
      currentUser.id,
    );

    this._advertService
    .createAdvert(advert).subscribe({
      next: () => this.afterSave(),
    });
  }

  updateAdvert(): void {
    const updatedAdvert = {
      ...this.advert,
      ...this.editAdvertForm.value,
    };

    this._advertService
    .updateAdvert(updatedAdvert).subscribe({
      next: () => this.afterSave(),
    });
  }

  onSave(): void {
    if (this.editAdvertForm.valid) {
      if (this.id == 0) {
        this.createAdvert();
        return;
      }

      if (this.id > 0) {
        this.updateAdvert();
        return;
      }
    } else {
      this.alertMessage = "Please ensure the form is valid.";
      this.editAdvertForm.markAllAsTouched();
      this.validationMessage = invalidInputs(this.editAdvertForm, this.validationMessages);
      setTimeout(() => {
        this.alertMessage = "";
      }, 2000);
    }
  }

  afterSave(): void {
    this.editAdvertForm.markAsPristine();
    this.editAdvertForm.markAsUntouched();
    this._router.navigate(["/myadverts"]);
  }

  choose(choice: boolean): void {
    this.canExit$.next(choice);
    if (choice == false) this.exitConfirm = false;
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
