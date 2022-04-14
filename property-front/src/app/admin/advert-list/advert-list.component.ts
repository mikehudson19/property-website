import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private advertService: AdvertService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    console.log("userId",userId);
    
    const adverts = userId ? this.advertService.getUserAdverts(+userId) : this.advertService.getAllAdverts();

    adverts.subscribe(adverts => {
      console.log(adverts);
    })
  }

}
