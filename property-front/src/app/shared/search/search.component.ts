import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '@app/_services/location.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  provinces = ['Gauteng', 'North West', 'Northern Cape', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Free State', 'Mpumalanga', 'KwaZulu-Natal'];
  searchForm: FormGroup;
  cities: string[] = [];
  prices = [];


  constructor(private _formBuilder: FormBuilder,
              private _locationService: LocationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 

    this.searchForm = this._formBuilder.group({
      province: ["", []],
      city: ["", []],
      minPrice: ["", []],
      maxPrice: ["", []],
      keyword: ["", []]
    })

    this.route.queryParamMap
      .subscribe((params: any) => {
        const queryParams = params.params;
        
        this.searchForm.setValue({
          province: queryParams.province ? queryParams.province : "",
          city: queryParams.city ? queryParams.city : "",
          minPrice: +queryParams.minPrice ? +queryParams.minPrice : null,
          maxPrice: +queryParams.maxPrice ? +queryParams.maxPrice : null,
          keyword: queryParams.keyword ? queryParams.keyword : ""
        })

        if (queryParams.city) {
          this._locationService.list()
            .pipe(
              map(x => {
                const cities = x.filter(x => x.name === queryParams.city);
                return cities.map(city => city.name);
              })
            )
            .subscribe(cities => {
              this.cities = cities;
              this.searchForm.get("city").patchValue(cities[0]);
            })
        }
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

      this.assignClass();
      this.generatePrices();
  }

  onSearch(): void {
    let queryParams: any = {};
  
    if (this.searchForm.get("province").value) queryParams.province = this.searchForm.get("province").value;
    if (this.searchForm.get("city").value) queryParams.city = this.searchForm.get("city").value;
    if (this.searchForm.get("minPrice").value) queryParams.minPrice = this.searchForm.get("minPrice").value;
    if (this.searchForm.get("maxPrice").value) queryParams.maxPrice = this.searchForm.get("maxPrice").value;
    if (this.searchForm.get("keyword").value) queryParams.keyword = this.searchForm.get("keyword").value;

        this.router.navigate(
          ['/alladverts'],
          { queryParams }
        )
  }

  resetClick(): void {
    if (this.router.url == '/home') {
      this.searchForm.reset();
      this.searchForm.patchValue({
        province: "",
        city: "",
        minPrice: "",
        maxPrice: ""
      })

      return;
    }

    this.searchForm.reset();
    this.router.navigate(
      ['/alladverts']
    )
  }

  assignClass() {
    const url = this.router.url;
    if (url == "/home") {
      return 'class1';
    } else {
      return 'class2';
    }
  }

  generatePrices() {
    let price = 500000;
    let count = 0;

    for (let i = 0; count < 16; i++) {
      this.prices.push(price);
      price += 500000;
      count++;
    }
  }

}
