import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';
import { forkJoin } from 'rxjs';
import { DeleteConfirmDialogComponent } from '../dialogs/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns = [ 'title', 'province', 'city', 'price', 'status', 'dateCreated', 'view', 'delete' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user: IUser;
  adverts: IAdvert[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private advertService: AdvertService,
              private matDialog: MatDialog,
              private router: Router) { }

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

  deleteAdvert(advertId): void {
    const dialog = this.matDialog.open(DeleteConfirmDialogComponent, {
      data: {
        type: "advert",
        id: advertId
      }
    });

    dialog.afterClosed()
    .subscribe(() => {
      this.advertService.getUserAdverts(+this.route.snapshot.params.id)
        .subscribe(adverts => {
          // Not ideal, must fix
          this.dataSource	= new MatTableDataSource(adverts);
        })
    })
  }

  viewAdvert(advertId: number): void {
    console.log(advertId);
    this.router.navigate(['/admin', '/user-list']);
  }
}
