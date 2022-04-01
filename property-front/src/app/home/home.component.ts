import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '@app/authentication/dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '@app/authentication/dialogs/register-dialog/register-dialog.component';
import { MobileNavComponent } from '@app/shared/mobile-nav/mobile-nav.component';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: IUser;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private matDialog: MatDialog) {
    this.authService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
   }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  openMobileNavModal() {
    this.matDialog.open(MobileNavComponent, {
      data: this.currentUser
    });
  }

  openLoginDialog() {
    this.matDialog.open(LoginDialogComponent)
  }

  openRegistrationDialog(): void {
    this.matDialog.open(RegisterDialogComponent);
  }
}
