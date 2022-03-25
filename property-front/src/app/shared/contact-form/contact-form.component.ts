import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@app/_helpers/customValidators';
import { debounceTime } from 'rxjs/operators';
import { invalidInputs } from '@app/shared/utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactSellerForm: FormGroup; 
  validationMessage: { [key: string]: string } = {};

  constructor(private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.contactSellerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      contactNumber: ["", [Validators.required, CustomValidators.onlyNumbers]],
      message: ["", [Validators.required]]
    })

    this.contactSellerForm.valueChanges
    .pipe(debounceTime(500))
    .subscribe(x => {
      this.validationMessage = invalidInputs(this.contactSellerForm);
    })

  }

  
  contactClick(): void {
    if (!this.contactSellerForm.valid) {
      this.contactSellerForm.markAllAsTouched();
      this.validationMessage = invalidInputs(this.contactSellerForm);
      return;
    }

    if (this.contactSellerForm.valid) {
      this.matSnackBar.open("Your message has been sent", 'Close', {
        duration: 2000
      });
      
      this.contactSellerForm.reset();
      return;
    }
    
  }

}
