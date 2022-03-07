import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InMemoryAdvertService } from '@app/_mockServices/inMemoryAdvert.service';
import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';

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
  advertsToSend: any = [];

  constructor(private _inMemAdService: InMemoryAdvertService,
              private _advertService: AdvertService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.queryParamMap
      .subscribe((params) => {
        this.preFilledTerms = params;

        const hasParams = Object.keys(this.preFilledTerms.params).length > 0;
        const advertSubscription = hasParams ? this._advertService.getSearchedAdverts() : this._advertService.getAllAdverts();

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
    /** @Note: If there was an API, this would be done there.  */
    const hasProvince = searchTerms.hasOwnProperty("province");
    const hasCity = searchTerms.hasOwnProperty("city");
    const hasMinPrice = searchTerms.hasOwnProperty("minPrice");
    const hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");
    const hasKeyword = searchTerms.hasOwnProperty("keyword");

    const advertsToSend: IAdvert[] = [];

    this.advertsToSend = [];

    adverts.forEach(advert => {


      if (hasKeyword) {
        const { keyword } = searchTerms;
        if (advert.details.includes(keyword)) {
          this.filterSomeMore(advert, searchTerms);
        } else {
          return;
        }
      } else {
        this.filterSomeMore(advert, searchTerms);
      }



      // if (hasProvince && hasCity && hasMinPrice && hasMaxPrice) {

      //   const { province, city, minPrice, maxPrice, keyword } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.city == city && 
      //       advert.price >= minPrice &&
      //       advert.price <= maxPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince && hasCity && hasMinPrice) {
      //   const { province, city, minPrice, keyword } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.city == city && 
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince && hasCity) {
      //   const { province, city, keyword } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.city == city) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince && hasMaxPrice && !hasCity && !hasMinPrice && !hasKeyword) {
      //   const { province, maxPrice } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.price <= maxPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince && hasMinPrice) {
      //   const { province, minPrice, keyword } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasCity && hasMinPrice) {
      //   const { city, minPrice, keyword } = searchTerms;   
  
      //   if (advert.city == city &&
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasCity && hasMaxPrice) {
      //   const { city, maxPrice, keyword } = searchTerms;   
  
      //   if (advert.city == city &&
      //       advert.price <= maxPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasCity && hasMaxPrice && hasMinPrice) {
      //   const { city, maxPrice, minPrice, keyword } = searchTerms;   
  
      //   if (advert.city == city &&
      //       advert.price <= maxPrice &&
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince && hasMaxPrice && hasMinPrice) {
      //   const { province, maxPrice, minPrice, keyword } = searchTerms;   
  
      //   if (advert.province == province &&
      //       advert.price <= maxPrice &&
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasMaxPrice && hasMinPrice) {
      //   const { maxPrice, minPrice, keyword } = searchTerms;   
  
      //   if (advert.price <= maxPrice &&
      //       advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasProvince) {
      //   const { province, keyword } = searchTerms;   
  
      //   if (advert.province == province) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasCity) {
      //   const { city, keyword } = searchTerms;   
  
      //   if (advert.city == city) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasMaxPrice) {
      //   const { maxPrice, keyword } = searchTerms;   
  
      //   if (advert.price <= maxPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

      // if (hasMinPrice) {
      //   const { minPrice, keyword } = searchTerms;   
  
      //   if (advert.price >= minPrice) 
      //       {
      //         advertsToSend.push(advert);
      //       }
      //   return;
      // }

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




// if (hasProvince && hasCity && hasMinPrice && hasMaxPrice && hasKeyword) {

//   const { province, city, minPrice, maxPrice, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.city == city && 
//       advert.price >= minPrice &&
//       advert.price <= maxPrice,
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasCity && hasMinPrice && hasKeyword) {
//   const { province, city, minPrice, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.city == city && 
//       advert.price >= minPrice && 
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasCity) {
//   const { province, city, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.city == city && 
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasMaxPrice && !hasCity && !hasMinPrice && !hasKeyword) {
//   const { province, maxPrice } = searchTerms;   

//   if (advert.province == province &&
//       advert.price <= maxPrice) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasMinPrice && hasKeyword) {
//   const { province, minPrice, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.price >= minPrice &&
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasCity && hasMinPrice && hasKeyword) {
//   const { city, minPrice, keyword } = searchTerms;   

//   if (advert.city == city &&
//       advert.price >= minPrice && 
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasCity && hasMaxPrice && hasKeyword) {
//   const { city, maxPrice, keyword } = searchTerms;   

//   if (advert.city == city &&
//       advert.price <= maxPrice &&
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasCity && hasMaxPrice && hasMinPrice && hasKeyword) {
//   const { city, maxPrice, minPrice, keyword } = searchTerms;   

//   if (advert.city == city &&
//       advert.price <= maxPrice &&
//       advert.price >= minPrice && 
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasMaxPrice && hasMinPrice && hasKeyword) {
//   const { province, maxPrice, minPrice, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.price <= maxPrice &&
//       advert.price >= minPrice && 
//       advert.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasMaxPrice && hasMinPrice && hasKeyword) {
//   const { maxPrice, minPrice, keyword } = searchTerms;   

//   if (advert.price <= maxPrice &&
//       advert.price >= minPrice &&
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasProvince && hasKeyword) {
//   const { province, keyword } = searchTerms;   

//   if (advert.province == province &&
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasCity && hasKeyword) {
//   const { city, keyword } = searchTerms;   

//   if (advert.city == city &&
//       advert.keyword.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasMaxPrice && hasKeyword) {
//   const { maxPrice, keyword } = searchTerms;   

//   if (advert.price <= maxPrice &&
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }

// if (hasMinPrice && hasKeyword) {
//   const { minPrice, keyword } = searchTerms;   

//   if (advert.price >= minPrice && 
//       advert.details.includes(keyword)) 
//       {
//         advertsToSend.push(advert);
//       }
//   return;
// }
