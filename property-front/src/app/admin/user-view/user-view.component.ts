import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['title', 'province', 'city', 'price', 'status', 'dateCreated', 'view', 'delete' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user: IUser;
  adverts: IAdvert[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private advertService: AdvertService) { }

  ngOnInit(): void {

    const userId = this.route.snapshot.params.id;

    const userSub = this.userService.getUser(userId);
    const advertSub = this.advertService.getUserAdverts(+userId);

    forkJoin([userSub, advertSub])
      .subscribe(data => {
        this.user = data[0];
        this.dataSource = new MatTableDataSource(data[1]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

  }
}
