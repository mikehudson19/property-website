import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: IUser;
  adverts: IAdvert[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private advertService: AdvertService) { }

  ngOnInit(): void {

    const userId = this.route.snapshot.params.id;
    this.userService.getUser(userId)
      .subscribe(user => {
        this.user = user;
      })
  }

}
