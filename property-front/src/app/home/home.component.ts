import { Component, OnInit } from '@angular/core';
import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adverts: IAdvert[] = [];

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.advertService.getAllAdverts()
      .subscribe(adverts => {
        /** @TODO: Implement a feature to only return/display three featured adverts */
        this.adverts = adverts;
      })
  }

}
