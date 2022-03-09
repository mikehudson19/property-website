import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerAccountComponent } from './seller-account/seller-account.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';



@NgModule({
  declarations: [ MyAccountComponent, SellerAccountComponent, PasswordDialogComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AccountsModule { }
