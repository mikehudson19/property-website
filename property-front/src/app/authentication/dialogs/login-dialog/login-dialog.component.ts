import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { invalidInputs } from '@app/shared/utils';
import { CustomValidators } from '@app/_helpers/customValidators';
import { AuthenticationService } from '@app/_services';
import { debounceTime, first } from 'rxjs/operators';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = "";
  message: { [key: string]: string } = {};
  fieldTextType: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private matDialog: MatDialog
  ) {
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) {
      this._router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [
        "",
        [Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(100),
        CustomValidators.noSpaceValidator
    ],
      ],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams["returnUrl"] || "/";

    this.loginForm.valueChanges
      .pipe(debounceTime(600))
      .subscribe(value => {
        this.message = invalidInputs(this.loginForm)
      }
      );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.message = invalidInputs(this.loginForm);
      return;
    }

    this.loading = true;
    this._authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this._router.navigate(["myadverts"]);
          this.dialogRef.close();
        },
        (error) => {
          this.error = error;
          setTimeout (() => {
            this.error = '';
         }, 1800);
          this.loading = false;
        }
      );
  }

  registerClick(): void {
    this.matDialog.open(RegisterDialogComponent);
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }
}
