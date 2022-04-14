import { Component, OnInit } from '@angular/core';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {    
    const adverts = this.advertService.getAllAdverts();

    adverts.subscribe(adverts => {
      console.log(adverts);
    })
  }
}
