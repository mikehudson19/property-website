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
import { MatDialog } from "@angular/material/dialog";
import { UnsavedChangesDialogComponent } from "../dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component";

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
  isConfirm = false;
  validationMessage: {
    [key: string]: string;
  } = {};
  alertMessage = "";
  canExit$: Subject<boolean> = new Subject<boolean>(); 

  images = [
    '../../../assets/image-1.jpg',
    '../../../assets/image-2.jpg',
    '../../../assets/image-3.jpg',
    '../../../assets/image-4.jpg',
    '../../../assets/image-5.jpg',
    '../../../assets/image-6.jpg'
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _advertService: AdvertService,
    private _locationService: LocationService,
    private authenticationService: AuthenticationService,
    private matDialog: MatDialog
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
          Validators.maxLength(1000)
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
      carports: [
        this.advert?.carports,
        [Validators.required, Validators.min(0)]
      ],
      size: [
        this.advert?.size,
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

  unsavedChanges(){
   const dialogRef = this.matDialog.open(UnsavedChangesDialogComponent, {});

   dialogRef.afterClosed()
    .subscribe(choice => {
      this.canExit$.next(choice);
   })
  }

  getCities(): void {
    this.cities = [];
    this._locationService.list().subscribe(cities => {
      /** @Note: Can replace this at some stage with a query param sent to the API */
      cities.rows.forEach(city => {
        if (this.province === city.province) {
          this.cities?.push(city.name);
        }
      });
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
      carports: this.advert.carports,
      size: this.advert.size
    });
  }

  createAdvert(): void {
    /** @TODO: Hack for now - need to move this userId to the API at some stage */
    const currentUser = this.authenticationService.currentUserValue;
    const advertDetails = this.addBreaksToAdvertDetails(this.editAdvertForm.get("details").value.trim());

    const advert = {
      title: this.editAdvertForm.get("title").value.trim(),
      province:  this.editAdvertForm.get("province").value.trim(),
      city: this.editAdvertForm.get("city").value.trim(),
      price: this.editAdvertForm.get("price").value.trim(),
      details: advertDetails,
      bedrooms: this.editAdvertForm.get("bedrooms").value,
      bathrooms: this.editAdvertForm.get("bathrooms").value,
      carports: this.editAdvertForm.get('carports').value,
      dateCreated: new Date(),
      status: 'Live',
      userId: currentUser.id,
      size: this.editAdvertForm.get('size').value
    };

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
      if (this.id === 0) {
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

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  addBreaksToAdvertDetails(advertDetails: string): string {
    const arr = advertDetails.split(/[\s][\s]/);

    for (let i = 1; i < arr.length; i+=2) {
      arr.splice(i, 0, '<br><br>')
    }

    const str = arr.join(' ');

    return str;
  }
}
