import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { invalidInputs } from '@app/shared/utils';
import { CustomValidators } from '@app/_helpers/customValidators';
import { User } from '@app/_models/user';
import { AuthenticationService, UserService } from '@app/_services';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { PasswordReqDialogComponent } from '../password-req-dialog/password-req-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  registrationForm: FormGroup;
  message: { [key: string]: string } = {};
  invalidSubmit: boolean = false;
  loading: boolean = false;
  error: string = "";
  passRequirements: boolean = false;
  fieldTextType: boolean = false;
  sub: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit(): void {

    this.registrationForm = this._formBuilder.group({
      firstName: [
        "",
        [ Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers ],
      ],
      lastName: [
        "",
        [ Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers ],
      ],
      email: [
        "",
        [ Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(100),
          CustomValidators.noSpaceValidator ],
      ],
      contactNumber: [
        "", 
        [ Validators.required,
          CustomValidators.onlyNumbers ]
      ],
      passwords: this._formBuilder.group(
        {
          password: [
            "",
            [ Validators.required,
              Validators.minLength(8),
              Validators.maxLength(100),
              CustomValidators.noSpaceValidator,
              CustomValidators.passwordNumber,
              CustomValidators.passwordUpperCase ],
          ],
          confirmPass: ["", Validators.required],
        },
        { validator: CustomValidators.passwordCompare }
      ),
    });

    this.sub = this.registrationForm.valueChanges
      .pipe(debounceTime(600))
      .subscribe(
        (value) => (this.message = invalidInputs(this.registrationForm))
      );
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      this.message = invalidInputs(this.registrationForm);
      return;
    }
    
    this.loading = true;

    const user = new User(
      this.registrationForm.get("firstName").value.trim(),
      this.registrationForm.get("lastName").value.trim(),
      this.registrationForm.get("email").value.trim(),
      this.registrationForm.get("contactNumber").value.trim(),
      this.registrationForm.get("passwords.password").value.trim(),
      this.registrationForm.get("passwords.confirmPass").value.trim(),
    );

    user.favourites = [];

    this._userService
      .saveUser(user)
      .subscribe();

    setTimeout (() => {
      this._authenticationService
      .login(user.email, user.password) 
      .subscribe(
        (data) => {
          this.dialogRef.close();
          this._router.navigate(["myadverts"]);
          this.loading = false;
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
   }, 3000);
  }

  showPassRequirements(): void {
      // this.passRequirements = !this.passRequirements;
      this.matDialog.open(PasswordReqDialogComponent);
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  loginClick(): void {
    this.matDialog.open(LoginDialogComponent);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
