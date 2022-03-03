import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISearchTerms } from '@app/_models/ISearchTerms';
import { AdvertService } from '@app/_services/advert.service';
import { LocationService } from '@app/_services/location.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  provinces = ['Gauteng', 'North West', 'Northern Cape', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Free State', 'Mpumalanga', 'KwaZulu-Natal'];
  searchForm: FormGroup;
  cities: string[] = [];

  constructor(private _advertService: AdvertService,
              private _formBuilder: FormBuilder,
              private _locationService: LocationService,
              private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      province: ["", []],
      city: ["", []],
      minPrice: ["", []],
      maxPrice: ["", []],
      keyword: ["", []]
    })

    this.searchForm.get("province").valueChanges
      .subscribe(value => {
        this._locationService.list()
        .pipe(
          map(x => {
            const cities = x.filter(x => x.province === value);
            return cities.map(city => city.name);
          })
        )
        .subscribe(cities => {
          this.cities = cities;
        })
      })
  }

  onSearch(): void {
    let queryParams: {
      province: string,
      city: string,
      minPrice: number,
      maxPrice: number
    };
  
    if (this.searchForm.get("province").value) queryParams.province = this.searchForm.get("province").value;
    if (this.searchForm.get("city").value) queryParams.city = this.searchForm.get("city").value;
    if (this.searchForm.get("minPrice").value) queryParams.minPrice = this.searchForm.get("minPrice").value;
    if (this.searchForm.get("maxPrice").value) queryParams.maxPrice = this.searchForm.get("maxPrice").value;

    this._advertService.getSearchedAdverts()
      .subscribe(adverts => {
        this.router.navigate(
          ['/alladverts'],
          { queryParams }
        )
      });
  }

}
