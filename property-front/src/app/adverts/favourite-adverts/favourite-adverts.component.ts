import { Component, OnInit } from '@angular/core';
import { IAdvert } from '@app/_models/IAdvert';
import { AuthenticationService, UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favourite-adverts',
  templateUrl: './favourite-adverts.component.html',
  styleUrls: ['./favourite-adverts.component.scss']
})
export class FavouriteAdvertsComponent implements OnInit {

  adverts: IAdvert[] = [];
  isLoading = true;

  constructor(private authService: AuthenticationService,
              private advertService: AdvertService,
              private userService: UserService) { }

  ngOnInit(): void {

    const authUserId = this.authService.currentUserValue.id;

    this.userService.getUser(authUserId)
      .subscribe(user => {

        this.advertService.getAllAdverts()
          .pipe(
            map(adverts => {
              const filtered = adverts.filter(ad => {
                if (user.favourites.includes(ad.id)) {
                  return ad;
                }
              })

              return filtered;
            })
          )
          .subscribe(ads => {
            this.adverts = ads;
            this.isLoading = false;
          });
      })
  }

  removeUnfavouritedAd(id) {
    const adToRemove = this.adverts.findIndex(advert => advert.id === id);
    this.adverts.splice(adToRemove, 1);
  }

}
