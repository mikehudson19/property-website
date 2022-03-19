import { Component, OnInit } from '@angular/core';
import { IAdvert } from '@app/_models/IAdvert';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {

  }

}
