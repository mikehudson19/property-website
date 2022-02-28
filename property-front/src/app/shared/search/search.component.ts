import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISearchTerms } from '@app/_models/ISearchTerms';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private _advertService: AdvertService,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      province: ["", []],
      city: ["", []],
      minPrice: ["", []],
      maxPrice: ["", []],
      keyword: ["", []]
    })
  }

  onSearch(): void {
    const searchTerms: ISearchTerms = {
      province: this.searchForm.get("province").value,
      city: this.searchForm.get("city").value,
      minPrice: this.searchForm.get("minPrice").value,
      maxPrice: this.searchForm.get("maxPrice").value
    }

    this._advertService.getSearchedAdverts().subscribe()
  }

}
