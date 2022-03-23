import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidators } from '@app/_helpers/customValidators';
import { UserService } from '@app/_services';
import { debounceTime, delay } from 'rxjs/operators';
import { invalidInputs } from '@app/shared/utils';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  editPasswordForm: FormGroup;
  fieldTextType: boolean = false;
  validationMessage: { [key: string]: string } = {};

  validationMessages: {} = {
    currentPassword: {
      required: "Your current password is required"
    },
    passwords: {
      match: "Your passwords must match",
    },
    password: {
      required: "A password is required",
      minlength: "Your password needs to be at least 8 characters long",
      maxlength: "Your password cannot be longer than 100 characters",
      noSpaceValidator: "Your password cannot contain spaces",
      passwordNumber: "Your password must contain at least one number",
      passwordUpperCase:
        "Your password must contain at leat one uppercase character",
    },
    confirmPass: {
      required: "Please confirm your password",
    },
  };

  constructor(private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<PasswordDialogComponent>,
              private _userService: UserService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editPasswordForm = this._formBuilder.group({
      currentPassword: ["", Validators.required],
      passwords: this._formBuilder.group({
        password: ["", [  Validators.required, 
                          Validators.minLength(8), 
                          Validators.maxLength(100),
                          CustomValidators.noSpaceValidator,
                          CustomValidators.passwordNumber,
                          CustomValidators.passwordUpperCase ]],
        confirmPass: ["", Validators.required]
      }, { validator: CustomValidators.passwordCompare } )
    })

    this.editPasswordForm.valueChanges
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.validationMessage = invalidInputs(this.editPasswordForm, this.validationMessages);
      })
  }

  updatePassword() {
    const currentPassword = this.editPasswordForm.get("currentPassword").value;

    this.editPasswordForm.get("currentPassword").setErrors(null);
    this.validationMessage = {};

    if (currentPassword !== this.data.user.password) {
      this.editPasswordForm.get("currentPassword").setErrors({ currentPassword: true });
      this.validationMessage = { currentPassword: "Password is not right, it is so not right"}
      return;
    } 

    if (!this.editPasswordForm.valid) {
      this.editPasswordForm.markAllAsTouched();
      this.validationMessage = invalidInputs(this.editPasswordForm, this.validationMessages);
      return;
    }

    const passwordToUpdate: {} = { 
        id: this.data.user.id,
        currentPassword: this.editPasswordForm.get("currentPassword").value,
        password: this.editPasswordForm.get("passwords.password").value,
        confirmPass: this.editPasswordForm.get("passwords.confirmPass").value
    };
      
    this._userService.updateUserPassword(passwordToUpdate)
      .subscribe((user) => {
        this.dialogRef.close();
        this.matSnackBar.open("Your password has been updated", 'Close', { 
          duration: 2000
         });
      });
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
