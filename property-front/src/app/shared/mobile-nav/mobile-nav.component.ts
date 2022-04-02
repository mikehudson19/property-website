import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '@app/authentication/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '@app/authentication/dialogs/register-dialog/register-dialog.component';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  currentUser: IUser;
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private authService: AuthenticationService,
              private router: Router,
              private matDialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.currentUser = this.data;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  openLoginDialog(): void {
    this.matDialog.open(LoginDialogComponent)
  }

  openRegistrationDialog(): void {
    this.matDialog.open(RegisterDialogComponent);
  }

}
