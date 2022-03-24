import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss']
})
export class AdvertDetailComponent implements OnInit, OnDestroy {

  headlineImage;
  headlineImgIndex = 0;

  sub: Subscription = new Subscription();
  id: number;
  advert: IAdvert;
  authUser: IUser;
  isFavourite: boolean;
  imagesLoaded: boolean;

  constructor(private _route: ActivatedRoute,
              private _advertService: AdvertService,
              private matSnackBar: MatSnackBar,
              private authService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.sub.add(
      this._route.paramMap.subscribe((params) => {
        this.id = +params.get("id");
        this.getAdvert(this.id);
      })
    );
}

  cycleForward(): void {
    this.headlineImgIndex++;
    if (this.headlineImgIndex < this.advert.images.length) {
      this.advert.headlineImage = this.advert.images[this.headlineImgIndex];
    } else {
      this.advert.headlineImage = this.advert.images[0];
      this.headlineImgIndex = 0;
    }
  }

  cycleBackward(): void {
    this.headlineImgIndex--;
    if (this.headlineImgIndex < this.advert.images.length && this.headlineImgIndex >= 0) {
      this.advert.headlineImage = this.advert.images[this.headlineImgIndex];
    } else {
      this.advert.headlineImage = this.advert.images[this.advert.images.length - 1];
      this.headlineImgIndex = this.advert.images.length - 1;
    }
  }

  getClass(img): string {
    if (this.advert.headlineImage == img) {
      return;
    } else {
      return 'overlay';
    }
  }

  selectImage(img): void {
    const newIndex = this.advert.images.findIndex(image => image === img );
    this.headlineImgIndex = newIndex;
    this.advert.headlineImage = img;
  }

  getAdvert(id: number): void {
    this._advertService  
    .getAdvert(id)
    .pipe(
      tap(advert => {
        const headlineImgIndex = advert.images.findIndex(image => image == advert.headlineImage);
        advert.images.splice(headlineImgIndex, 1);
        advert.images.unshift(advert.headlineImage);
      })
    )
    .subscribe((advert => {
        this.advert = advert;
        this.determineFavourite();
        this.imagesLoaded = true;
      }))
  }

  determineFavourite(): void {
    const authUserId = this.authService.currentUserValue.id;

    this.userService.getUser(authUserId)
      .subscribe(user => {
        this.authUser = user;
        if (this.authUser.favourites.includes(this.advert.id)) this.isFavourite = true;

      });
  }

  toggleFavourite(): void {
    const authUserId = this.authService.currentUserValue.id;

    this.userService.getUser(authUserId).subscribe(user => {

      if (!this.isFavourite) {
        user.favourites.push(this.advert.id);
        this.isFavourite = true;
      } else {
        const newFavourites = user.favourites.filter(element => element !== this.advert.id);
        this.isFavourite = false;
        user.favourites = newFavourites;
      }

      this.userService.updateUser(user).subscribe();
      this.matSnackBar.open(`${this.isFavourite ? "Added to" : "Removed from"} your favourites`, "Close", {
        duration: 2000
      })
    })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}