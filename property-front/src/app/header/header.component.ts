import { AfterContentChecked, AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "@app/_models/user";
import { AuthenticationService } from "@app/_services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements AfterContentChecked {
  currentUser: User;  

  home;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private router: Router
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

  logout() {
    this._authenticationService.logout();
    this._router.navigate(["/login"]);
  }

}
