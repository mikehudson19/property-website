import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private advertService: AdvertService,
              private authService: AuthenticationService,
              private router: Router) {
    this.authService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
   }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
