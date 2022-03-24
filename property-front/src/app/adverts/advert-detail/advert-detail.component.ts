import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss']
})
export class AdvertDetailComponent implements OnInit, OnDestroy {

  images = [
    '../../../assets/headline-image.jpg',
    '../../../assets/image-1.jpg',
    '../../../assets/image-2.jpg',
    '../../../assets/image-3.jpg',
    '../../../assets/image-4.jpg',
    '../../../assets/image-5.jpg',
  ];

  imageSrc = '../../../assets/headline-image.jpg';
  imageIndex = 0;

  sub: Subscription = new Subscription();
  id: number;
  advert: IAdvert;
  authUser: IUser;
  isFavourite: boolean;

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
    this.imageIndex++;
    if (this.imageIndex < this.images.length) {
      this.imageSrc = this.images[this.imageIndex];
    } else {
      this.imageSrc = this.images[0];
      this.imageIndex = 0;
    }
  }

  cycleBackward(): void {
    this.imageIndex--;
    if (this.imageIndex < this.images.length && this.imageIndex >= 0) {
      this.imageSrc = this.images[this.imageIndex];
    } else {
      this.imageSrc = this.images[this.images.length - 1];
      this.imageIndex = this.images.length - 1;
    }
  }

  getClass(img): string {
    if (this.imageSrc == img) {
      return;
    } else {
      return 'overlay';
    }
  }

  selectImage(img): void {
    const newIndex = this.images.findIndex(image => image === img );
    this.imageIndex = newIndex;
    this.imageSrc = img;
  }

  getAdvert(id: number): void {
    this._advertService  
    .getAdvert(id).subscribe((advert => {
        this.advert = advert;
        this.determineFavourite();
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