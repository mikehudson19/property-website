import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { forkJoin, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactSellerDialogComponent } from '../dialogs/contact-seller-dialog/contact-seller-dialog.component';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss']
})
export class AdvertDetailComponent implements OnInit, OnDestroy {

  headlineImage;
  headlineImgIndex = 0;
  sub: Subscription = new Subscription();
  advert: IAdvert;
  authUser: IUser;
  isFavourite: boolean;
  imagesLoaded: boolean;
  isLoading: boolean = true;
  userIsSeller: boolean;
  advertDetailWidth: string;

  constructor(private _route: ActivatedRoute,
              private _advertService: AdvertService,
              private matSnackBar: MatSnackBar,
              private authService: AuthenticationService,
              private userService: UserService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {

    this.sub.add(
      this._route.paramMap.subscribe((params) => {
        const id = +params.get("id");
        const authUserId = this.authService.currentUserValue?.id;

        let advertCall = this._advertService.getAdvert(id)
                          .pipe(tap(advert => this.advertHeadlineImgToFront(advert)));

        let authUserCall = this.userService.getUser(authUserId);

        forkJoin([advertCall, authUserCall])
          .subscribe(res => {
            this.advert = res[0];
            this.authUser = res[1];

            this.isFavourite = this.determineFavourite();
            this.userIsSeller = this.isUserSeller();
            // Just added this because there are no advert images on the DB
            if (this.advert.images) {
              this.imagesLoaded = true;
            }
          });
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

  advertHeadlineImgToFront(advert: IAdvert): void {
    if (advert.images) {
      const headlineImgIndex = advert.images.findIndex(image => image == advert.headlineImage);
      advert.images.splice(headlineImgIndex, 1);
      advert.images.unshift(advert.headlineImage);
    }
  }

  imgOverlay(img): string {
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

  determineFavourite(): boolean {
    this.isLoading = false;
    if (this.authUser.favourites.includes(this.advert.id)) return true;
  }
  
  openContactDialog(): void {
    this.matDialog.open(ContactSellerDialogComponent);
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

  isUserSeller(): boolean {
    if (this.advert?.userId === this.authUser?.id) {
      this.advertDetailWidth = 'full-width';
      return true;
    }
    this.advertDetailWidth = 'part-width';
    return false;
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
