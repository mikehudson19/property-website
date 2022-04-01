import { AfterContentChecked, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LoginDialogComponent } from "@app/authentication/dialogs/login-dialog/login-dialog.component";
import { RegisterDialogComponent } from "@app/authentication/dialogs/register-dialog/register-dialog.component";
import { MobileNavComponent } from "@app/shared/mobile-nav/mobile-nav.component";
import { User } from "@app/_models/user";
import { AuthenticationService } from "@app/_services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements AfterContentChecked {
  currentUser: User;  

  home: boolean;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private router: Router,
    private matDialog: MatDialog
  ) {
    this._authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngAfterContentChecked(): void {
    if (this.router.url == "/" || this.router.url == "/home") {
      this.home = true;
    } else {
      this.home = false;
    }
  }

  openMobileNavModal(): void {
    this.matDialog.open(MobileNavComponent, {
      data: this.currentUser
    });
  }

  openLoginDialog(): void {
    this.matDialog.open(LoginDialogComponent)
  }

  openRegistrationDialog(): void {
    this.matDialog.open(RegisterDialogComponent);
  }

  logout(): void {
    this._authenticationService.logout();
    this._router.navigate(["/"]);
  }

}
