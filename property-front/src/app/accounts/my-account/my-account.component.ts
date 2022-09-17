import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomValidators } from '@app/_helpers/customValidators';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from '@app/_services';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { invalidInputs } from '@app/shared/utils';
import { UserRole } from '@app/_models/user-role.enum';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})

export class MyAccountComponent implements OnInit, OnDestroy {
  manageAccountForm: FormGroup;
  validationMessage: { [key: string]: string } = {};
  sub: Subscription;
  authUser: IUser;
  error = '';
  successMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private authService: AuthenticationService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.manageAccountForm = this._formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          CustomValidators.multipleSpaceValidator,
          CustomValidators.noSpecialChars,
          CustomValidators.noNumbers,
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(100),
          CustomValidators.noSpaceValidator,
        ],
      ],
      contactNumber: [
        '',
        [
          Validators.required,
          CustomValidators.onlyNumbers
        ]
      ]
    });

    this.sub = this.manageAccountForm.valueChanges
      .pipe(debounceTime(600))
      .subscribe(
        (value) => (this.validationMessage = invalidInputs(this.manageAccountForm))
      );

    this.getAuthUser();
  }

  getAuthUser(): void {
    const userId = this.authService.currentUserValue.id;

    this._userService.getUser(userId)
      .subscribe((user) => {
        this.authUser = user;

        this.displayUser();
      });
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
    const userToUpdate: any = {
      id: this.authUser.id,
      firstName: this.manageAccountForm.get('firstName').value.trim(),
      lastName: this.manageAccountForm.get('lastName').value.trim(),
      email: this.manageAccountForm.get('email').value.trim(),
      contactNumber: this.manageAccountForm.get('contactNumber').value?.trim(),
      role: UserRole.User
    };

    if (this.authUser.firstName === userToUpdate.firstName &&
        this.authUser.lastName === userToUpdate.lastName &&
        this.authUser.email === userToUpdate.email &&
        this.authUser.contactNumber === userToUpdate.contactNumber ) {
          this.matSnackBar.open('No changes were detected', 'Close', {
            duration: 2000
          });
          return;
        }

    this._userService.updateUser(userToUpdate)
      .subscribe((user) => {
        this._router
          .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
          .then(() => {
            this._router.navigate(['/myaccount']);
            this.matSnackBar.open('You profile has been updated', 'Close', {
              duration: 2000
            });
          });
      });
  }

  openDialog() {
    this.matDialog.open(PasswordDialogComponent, {
      data: {
        user: this.authUser
      }
    });
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
    if (this.sub) { this.sub.unsubscribe(); }
  }
}
