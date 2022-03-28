import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '@app/shared/search/search.component';
import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';
import { SearchDialogComponent } from '../dialogs/search-dialog/search-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './all-adverts.component.html',
  styleUrls: ['./all-adverts.component.scss']
})
export class AllAdvertsComponent implements OnInit {

  adverts: IAdvert[] = [];
  isAscending: boolean;
  orderBy: string = 'None';
  preFilledTerms: any;
  advertsToSend: IAdvert[] = [];
  loading: boolean = true;

  constructor(private _advertService: AdvertService,
              private route: ActivatedRoute,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  
    this.route.queryParamMap
      .subscribe((params) => {
        this.preFilledTerms = params;

        const hasParams = Object.keys(this.preFilledTerms.params).length > 0;
        const advertSubscription = hasParams ? this._advertService.getSearchedAdverts() : this._advertService.getAllAdverts();

        advertSubscription.subscribe(adverts => {
          if (hasParams) {
            this.adverts = this.filterAdverts(adverts, this.preFilledTerms.params);
            this.loading = false;
          } else {
            this.adverts = adverts;
            this.loading = false;
          }
        })
      })

  }

  orderChoice(choice: string): void {
    if (choice === 'Ascending') {
      this.isAscending = true;
      this.orderBy = 'Price | Low-to-High'
      this.adverts.sort(this.compare('asc'));
    }
 
    if (choice === 'Descending') {
      this.isAscending = false;
      this.orderBy = 'Price | High-to-Low'
      this.adverts.sort(this.compare('desc'));
    }
  }

  compare(order: string): (a: IAdvert, b: IAdvert) => number {

    return function innerSort(a: IAdvert, b: IAdvert): number {

      const advertA: number = a.price;
      const advertB: number = b.price;

      let comparison: number = 0;
      if (advertA > advertB) {
        comparison = 1;
      } else if (advertA < advertB) {
        comparison = -1;
      }
      
      return (order === 'desc') ? (comparison * -1) : comparison;
    }
  }

  openSearchModal() {
    this.matDialog.open(SearchDialogComponent);
  }

  filterAdverts(adverts, searchTerms): IAdvert[] {
    /** @Note: If there was an API, this would be done there.  */

    const hasKeyword = searchTerms.hasOwnProperty("keyword");
    const hasProvince = searchTerms.hasOwnProperty("province");
    const hasCity = searchTerms.hasOwnProperty("city");
    const hasMinPrice = searchTerms.hasOwnProperty("minPrice");
    const hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");
    const { keyword } = searchTerms;

    this.advertsToSend = [];

    adverts.forEach(advert => {
      
      if (hasKeyword && ( !hasCity && !hasProvince && !hasMinPrice && !hasMaxPrice)) {
       if (advert.details.includes(keyword)) this.advertsToSend.push(advert);
      } else if (hasKeyword && ( hasCity || hasProvince || hasMinPrice || hasMaxPrice) ) {
        if (advert.details.includes(keyword)) {
          this.filterSomeMore(advert, searchTerms);
        } else {
          return;
        }
      } else {
        this.filterSomeMore(advert, searchTerms);
      }
    });

    return this.advertsToSend;
  }

  filterSomeMore(advert, searchTerms) {

    const hasProvince = searchTerms.hasOwnProperty("province");
    const hasCity = searchTerms.hasOwnProperty("city");
    const hasMinPrice = searchTerms.hasOwnProperty("minPrice");
    const hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");

    if (hasProvince && hasCity && hasMinPrice && hasMaxPrice) {

      const { province, city, minPrice, maxPrice, keyword } = searchTerms;   

      if (advert.province == province &&
          advert.city == city && 
          advert.price >= minPrice &&
          advert.price <= maxPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince && hasCity && hasMinPrice) {
      const { province, city, minPrice, keyword } = searchTerms;   

      if (advert.province == province &&
          advert.city == city && 
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince && hasCity) {
      const { province, city, keyword } = searchTerms;   

      if (advert.province == province &&
          advert.city == city) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince && hasMaxPrice && !hasCity && !hasMinPrice) {
      const { province, maxPrice } = searchTerms;   

      if (advert.province == province &&
          advert.price <= maxPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince && hasMinPrice) {
      const { province, minPrice, keyword } = searchTerms;   

      if (advert.province == province &&
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasCity && hasMinPrice) {
      const { city, minPrice, keyword } = searchTerms;   

      if (advert.city == city &&
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasCity && hasMaxPrice) {
      const { city, maxPrice, keyword } = searchTerms;   

      if (advert.city == city &&
          advert.price <= maxPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasCity && hasMaxPrice && hasMinPrice) {
      const { city, maxPrice, minPrice, keyword } = searchTerms;   

      if (advert.city == city &&
          advert.price <= maxPrice &&
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince && hasMaxPrice && hasMinPrice) {
      const { province, maxPrice, minPrice, keyword } = searchTerms;   

      if (advert.province == province &&
          advert.price <= maxPrice &&
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasMaxPrice && hasMinPrice) {
      const { maxPrice, minPrice, keyword } = searchTerms;   

      if (advert.price <= maxPrice &&
          advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasProvince) {
      const { province, keyword } = searchTerms;   

      if (advert.province == province) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasCity) {
      const { city, keyword } = searchTerms;   

      if (advert.city == city) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasMaxPrice) {
      const { maxPrice, keyword } = searchTerms;   

      if (advert.price <= maxPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }

    if (hasMinPrice) {
      const { minPrice, keyword } = searchTerms;   

      if (advert.price >= minPrice) 
          {
            this.advertsToSend.push(advert);
          }
      return;
    }
  }

}