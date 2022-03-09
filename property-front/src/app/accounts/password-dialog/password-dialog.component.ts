import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomValidators } from '@app/_helpers/customValidators';
import { IUser } from '@app/_models/IUser';
import { UserService } from '@app/_services';

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
      required: "Your current password is required",
      incorrectPassword: "The password you entered is incorrect"
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
              private _router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.data)
  }

  buildForm() {
    this.editPasswordForm = this._formBuilder.group({
      currentPassword: [""],
      passwords: this._formBuilder.group({
        password: [""],
        confirmPass: [""]
      }, { validator: CustomValidators.passwordCompare } )
    })
  }

  updatePassword() {
      const currentPassword = this.editPasswordForm.get("currentPassword").value;

      if (currentPassword !== this.data.user.password) {
        /** @TODO: Form validation here to prevent save */
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
        this._router
          .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
          .then(() => {
            this._router.navigate(["/myaccount"]);
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
