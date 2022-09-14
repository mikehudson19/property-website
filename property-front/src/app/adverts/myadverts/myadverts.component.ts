import { Component, OnInit } from "@angular/core";

import { AuthenticationService } from "@app/_services";

import { IAdvert } from "@app/_models/IAdvert";
import { AdvertService } from "@app/_services/advert.service";
import { IUser } from "@app/_models/IUser";

@Component({
  templateUrl: "myadverts.component.html",
  styleUrls: ["./myadverts.component.scss"],
})
export class MyAdvertsComponent implements OnInit {
  loading: boolean = false;
  adverts: IAdvert[] = [];
  currentUser: IUser;

  constructor(private _advertService: AdvertService,
              private _authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.currentUser = this._authService.currentUserValue;
    this._advertService.getUserAdverts(this.currentUser.id)
    .subscribe((adverts) => {
      this.loading = false;
      this.adverts = adverts.rows;
    });
  }
}
