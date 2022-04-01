import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { SharedModule } from '@app/shared/shared.module';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';



@NgModule({
  declarations: [LoginDialogComponent, RegisterDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
