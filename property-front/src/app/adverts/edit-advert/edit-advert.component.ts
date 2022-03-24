import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IAdvert } from "@app/_models/IAdvert";
import { Subject, Subscription } from "rxjs";
import { Advert } from "@app/_models/advert";
import { debounceTime } from "rxjs/operators";
import { AdvertService } from "@app/_services/advert.service";
import { LocationService } from "@app/_services/location.service";
import { CustomValidators } from '@app/_helpers/customValidators';
import { AuthenticationService } from "@app/_services";
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

  images = [
    '../../../assets/headline-image.jpg',
    '../../../assets/image-1.jpg',
    '../../../assets/image-2.jpg',
    '../../../assets/image-3.jpg',
    '../../../assets/image-4.jpg',
    '../../../assets/image-5.jpg',
  ];

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
            (this.validationMessage = invalidInputs(this.editAdvertForm))
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
      this.images,    
      this.randomHeadlineImage(),
      'Live',
      currentUser.id,
      
    );

    this._advertService
    .createAdvert(advert).subscribe({
      next: () => this.afterSave(),
    });
  }

  randomHeadlineImage(): string {
    const randomNum = Math.floor(Math.random() * 5);
    return this.images[randomNum];
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
      this.validationMessage = invalidInputs(this.editAdvertForm);
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
