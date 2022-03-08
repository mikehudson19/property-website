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
        /** @TODO: Temporary hack - implement a more sophisticated feature to only return/display three featured adverts */
        let count = 0;

        adverts.forEach(advert => {
          if (count <= 2) {
            this.adverts.push(advert);
            count++;
          }
        })
      })
  }

}
