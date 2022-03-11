import { Component, OnDestroy, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CustomValidators } from "@app/_helpers/customValidators";
import { User } from "@app/_models";
import { IPasswords } from '@app/_models/IPasswords';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from "@app/_services";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { PasswordDialogComponent } from "../password-dialog/password-dialog.component";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})

export class MyAccountComponent implements OnInit, OnDestroy {
  manageAccountForm: FormGroup;
  validationMessage: { [key: string]: string } = {};
  sub: Subscription;
  authUser: IUser;
  error: string = '';
  successMessage: string = '';

  validationMessages: {} = {
    firstName: {
      required: "A forename is required.",
      minlength: "Your firstName need to be at least 1 character long.",
      multipleSpaceValidator: "Your firstName cannot contain multiple spaces.",
      maxlength: "Your forename cannot be longer than 100 characters",
      noNumbers: "Your forename cannot contain any numbers",
      noSpecialChar: "Your forename cannot contain any special characters",
      spaceStart: "Your forename cannot start with a space",
    },
    lastName: {
      required: "Your lastName is required",
      minlength: "Your lastName needs to be at least 3 characters long.",
      multipleSpaceValidator: "Your lastName cannot contain multiple spaces.",
      spaceStart: "Your lastName cannot start with a space",
      maxlength: "Your lastName cannot be longer than 100 characters",
      noNumbers: "Your lastName cannot contain any numbers",
      noSpecialChar: "Your lastName cannot contain any special characters",
    },
    email: {
      required: "Your email address is required.",
      minlength: "Your email address must be at least 6 characters long",
      noSpaceValidator: "Your email address cannot contain spaces.",
      email: "This must be a valid email address.",
      maxlength: "Your email cannot be longer than 100 characters",
    },
    contactNumber: {
      required: "Your email address is required.",
      onlyNumbers: "Your contact number can only contain numbers",
      spaceStart: "Your contact number cannot start with a space"
    }
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private authService: AuthenticationService,
    private matDialog: MatDialog 
  ) {}

  ngOnInit(): void {
    this.manageAccountForm = this._formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers,
          CustomValidators.spaceStartValidator,
        ],
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          CustomValidators.spaceStartValidator,
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers,
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(100),
          CustomValidators.noSpaceValidator,
        ],
      ],
      contactNumber: [
        "",
        [
          Validators.required,
          CustomValidators.onlyNumbers,
          CustomValidators.spaceStartValidator
        ]
      ]
    });

    this.sub = this.manageAccountForm.valueChanges
      .pipe(debounceTime(600))
      .subscribe(
        (value) => (this.validationMessage = this.invalidInputs(this.manageAccountForm))
      );

    this.getAuthUser();
  }

  invalidInputs(formgroup: FormGroup) {
    let messages = {};
    for (const input in formgroup.controls) {
      const control = formgroup.controls[input];

      // If the passwords don't match, assign error message.
      if (control instanceof FormGroup && control.errors) {
        Object.keys(control.errors).map((messageKey) => {
          messages[input] = this.validationMessages[input][messageKey];
        });
      }

      // If the password field doesn't meet the requirements, assign error message.
      if (control instanceof FormGroup) {
        const nestedGroupMessages = this.invalidInputs(control);
        Object.assign(messages, nestedGroupMessages);
      }

      // If any of the other fields don't meet the requirements, assign error message.
      if (this.validationMessages[input]) {
        messages[input] = "";
        if (control.errors && (control.dirty || control.touched)) {
          Object.keys(control.errors).map((messageKey) => {
            messages[input] = this.validationMessages[input][messageKey];
          });
        }
      }
    }

    return messages;
  }

  getAuthUser(): void {
    const userId = this.authService.currentUserValue.id;

    this._userService.getUser(userId)
      .subscribe((user) => {
        console.log(user);
        this.authUser = user;

        this.displayUser();
      })
  }

  displayUser(): void {
    this.manageAccountForm.patchValue({
      firstName: this.authUser.firstName,
      lastName: this.authUser.lastName,
      email: this.authUser.email,
      contactNumber: this.authUser.contactNumber
    });
  }

  updateUser(): void {
    /** TODO: Change the way this updates */
    const userToUpdate: IUser = { 
      id: this.authUser.id,
      firstName: this.manageAccountForm.get("firstName").value,
      lastName: this.manageAccountForm.get("lastName").value,
      email: this.manageAccountForm.get("email").value,
      contactNumber: this.manageAccountForm.get("contactNumber").value,
    };

    this._userService.updateUser(userToUpdate)
      .subscribe((user) => {
        this._router
          .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
          .then(() => {
            this._router.navigate(["/myaccount"]);
          });
      });
  }

  openDialog() {
    this.matDialog.open(PasswordDialogComponent, {
      data: {
        user: this.authUser
      }
    })
  }

  updatePassword(): void {
    const passwords: IPasswords = {
      currentPassword: this.manageAccountForm.get("currentPassword").value,
      password: this.manageAccountForm.get("passwords.password").value,
      confirmPass: this.manageAccountForm.get("passwords.confirmPass").value
    }

    this._userService.updateUserPassword(passwords).subscribe(data => {
      this.successMessage = "Your password was successfully updated."
          setTimeout (() => {
            this.successMessage = '';
        }, 2500);

       this.afterSave();
    },
    error => {
      this.error = error;
      setTimeout (() => {
        this.error = '';
     }, 2500);
    })
  }

  afterSave(): void {
    this.manageAccountForm.patchValue({
      currentPassword: '',
      passwords: { password: '', confirmPass: ''},
    });
    this.manageAccountForm.markAsPristine();
    this.manageAccountForm.markAsUntouched();
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
