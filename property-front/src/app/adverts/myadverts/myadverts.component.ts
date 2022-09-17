import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@app/_services';

import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';
import { IUser } from '@app/_models/IUser';
import {AdvertGalleryService} from '@app/_services/advert-gallery.service';
import {forkJoin} from 'rxjs';

@Component({
  templateUrl: 'myadverts.component.html',
  styleUrls: ['./myadverts.component.scss'],
})
export class MyAdvertsComponent implements OnInit {
  loading = false;
  adverts: IAdvert[] = [];
  currentUser: IUser;

  constructor(private advertService: AdvertService,
              private authService: AuthenticationService,
              private advertGalleryService: AdvertGalleryService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.currentUser = this.authService.currentUserValue;

    const advertSub = this.advertService.getUserAdverts(this.currentUser.id);
    const advertHeadlineImgSub = this.advertGalleryService.getAdvertHeadlineImages();

    forkJoin([
        advertSub,
        advertHeadlineImgSub
    ])
        .subscribe(([adverts, advertHeadlineImages]) => {
          this.adverts = adverts.rows;
          this.loading = false;

          // Todo: Don't think this is the most efficient code.
          this.adverts.forEach(advert => {
            advertHeadlineImages.forEach(advertImg => {
              if (advertImg.advertId === advert.id) {
                advert.headlineImage = advertImg.headlineImage;
              }
            });
          });
        });

    this.advertService.getUserAdverts(this.currentUser.id)
    .subscribe((adverts) => {
      this.loading = false;
      this.adverts = adverts.rows;
    });
  }
}
