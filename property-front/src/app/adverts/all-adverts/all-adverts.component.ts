import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InMemoryAdvertService } from '@app/_mockServices/inMemoryAdvert.service';
import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';
import { ISearchTerms } from '@app/_models/ISearchTerms'

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

  constructor(private _inMemAdService: InMemoryAdvertService,
              private _advertService: AdvertService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.queryParamMap
      .subscribe((params) => {
        this.preFilledTerms = params;

        const hasParams = Object.keys(this.preFilledTerms.params).length > 0;
        const advertSubscription = hasParams ? this._advertService.getSearchedAdverts(this.preFilledTerms.params) : this._advertService.getAllAdverts();

        advertSubscription.subscribe(adverts => {
          if (hasParams) {
            this.adverts = this.filterAdverts(adverts, this.preFilledTerms.params);
          } else {
            this.adverts = adverts;
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

  filterAdverts(adverts, searchTerms): IAdvert[] {

    const hasProvince = searchTerms.hasOwnProperty("province");
    const hasCity = searchTerms.hasOwnProperty("city");
    const hasMinPrice = searchTerms.hasOwnProperty("minPrice");
    const hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");

    const advertsToSend: IAdvert[] = [];

    adverts.forEach(advert => {

      if (hasProvince && hasCity && hasMinPrice && hasMaxPrice) {
        const { province, city, minPrice, maxPrice } = searchTerms;   
  
        if (advert.province == province &&
            advert.city == city && 
            advert.price >= minPrice &&
            advert.price <= maxPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince && hasCity && hasMinPrice) {
        const { province, city, minPrice } = searchTerms;   
  
        if (advert.province == province &&
            advert.city == city && 
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince && hasCity) {
        const { province, city } = searchTerms;   
  
        if (advert.province == province &&
            advert.city == city) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince && hasMaxPrice && !hasCity && !hasMinPrice) {
        const { province, maxPrice } = searchTerms;   
  
        if (advert.province == province &&
            advert.price <= maxPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince && hasMinPrice) {
        const { province, minPrice } = searchTerms;   
  
        if (advert.province == province &&
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasCity && hasMinPrice) {
        const { city, minPrice } = searchTerms;   
  
        if (advert.city == city &&
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasCity && hasMaxPrice) {
        const { city, maxPrice } = searchTerms;   
  
        if (advert.city == city &&
            advert.price <= maxPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasCity && hasMaxPrice && hasMinPrice) {
        const { city, maxPrice, minPrice } = searchTerms;   
  
        if (advert.city == city &&
            advert.price <= maxPrice &&
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince && hasMaxPrice && hasMinPrice) {
        const { province, maxPrice, minPrice } = searchTerms;   
  
        if (advert.province == province &&
            advert.price <= maxPrice &&
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasMaxPrice && hasMinPrice) {
        const { maxPrice, minPrice } = searchTerms;   
  
        if (advert.price <= maxPrice &&
            advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasProvince) {
        const { province } = searchTerms;   
  
        if (advert.province == province) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasCity) {
        const { city } = searchTerms;   
  
        if (advert.city == city) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasMaxPrice) {
        const { maxPrice } = searchTerms;   
  
        if (advert.price <= maxPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

      if (hasMinPrice) {
        const { minPrice } = searchTerms;   
  
        if (advert.price >= minPrice) 
            {
              advertsToSend.push(advert);
            }
        return;
      }

    });

    return advertsToSend;
  }

}
