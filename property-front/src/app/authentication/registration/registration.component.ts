import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomValidators } from "@app/_helpers/customValidators";
import { User } from "@app/_models/user";
import { AuthenticationService, UserService } from "@app/_services";
import { InMemoryUserService } from "@app/_mockServices/inMemoryUser.service";
import { Subscription } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  registrationForm: FormGroup;
  message: { [key: string]: string } = {};
  invalidSubmit: boolean = false;
  loading: boolean = false;
  error: string = "";
  passRequirements: boolean = false;
  fieldTextType: boolean = false;
  sub: Subscription;

  validationMessages: {} = {
    forenames: {
      required: "Your forenames are required.",
      minlength: "Your forenames need to be at least 1 character long.",
      multipleSpaceValidator: "Your forenames cannot contain multiple spaces.",
      maxlength: "Your forename cannot be longer than 100 characters",
      noNumbers: "Your forename cannot contain any numbers",
      noSpecialChar: "Your forename cannot contain any special characters",
      spaceStart: "Your forename cannot start with a space"
    },
    surname: {
      required: "Your surname is required",
      minlength: "Your surname needs to be at least 3 characters long.",
      multipleSpaceValidator: "Your forenames cannot contain multiple spaces.",
      spaceStart: "Your surname cannot start with a space",
      maxlength: "Your surname cannot be longer than 100 characters",
      noNumbers: "Your surname cannot contain any numbers",
      noSpecialChar: "Your surname cannot contain any special characters",
    },
    email: {
      required: "Your email address is required.",
      minlength: "Your email address must be at least 6 characters long",
      noSpaceValidator: "Your email address cannot contain spaces.",
      email: "This must be a valid email address.",
      maxlength: "Your email cannot be longer than 100 characters",
    },
    passwords: {
      match: "Your passwords must match.",
    },
    password: {
      required: "A password is required.",
      minlength: "Your password needs to be at least 8 characters long.",
      maxlength: "Your password cannot be longer than 100 characters.",
      noSpaceValidator: "Your password cannot contain spaces.",
      passwordNumber: "Your password must contain at least one number.",
      passwordUpperCase:
        "Your password must contain at leat one uppercase character.",
    },
    confirmPass: {
      required: "Please confirm your password.",
    },
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _inMemUserService: InMemoryUserService,
    private _userService: UserService,
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({
      forenames: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers,
          CustomValidators.spaceStartValidator
        ],
      ],
      surname: [
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
      passwords: this._formBuilder.group(
        {
          password: [
            "",
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(100),
              CustomValidators.noSpaceValidator,
              CustomValidators.passwordNumber,
              CustomValidators.passwordUpperCase,
            ],
          ],
          confirmPass: ["", Validators.required],
        },
        { validator: CustomValidators.passwordCompare }
      ),
    });

    this.sub = this.registrationForm.valueChanges
      .pipe(debounceTime(600))
      .subscribe(
        (value) => (this.message = this.invalidInputs(this.registrationForm))
      );
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

  onSubmit(): void {
    this.loading = true;

    if (!this.registrationForm.valid) {
      this.invalidSubmit = true;
      setTimeout (() => {
        this.invalidSubmit = false;
     }, 1800);
      this.loading = false;
      return;
    }

    const user = new User(
      this.registrationForm.get("forenames").value.trim(),
      this.registrationForm.get("surname").value.trim(),
      this.registrationForm.get("email").value.trim(),
      this.registrationForm.get("passwords.password").value.trim(),
      this.registrationForm.get("passwords.confirmPass").value.trim()
    );

    // this._userService.createUser(user).subscribe(data => {
    //   console.log(data);
    // })

    // In Memory API backend for testing
    this._inMemUserService
      .saveUser(user)
      .subscribe();

    setTimeout (() => {
      this._authenticationService
      // .login(user.email, user.password) 
      .login('test@test', 'test') // For when using the fake back end.
      .subscribe(
        (data) => {
          console.log("logged in and authed")
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
      this.passRequirements = !this.passRequirements;
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
