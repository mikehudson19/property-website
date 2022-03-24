import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '@app/adverts/dialogs/delete-dialog/delete-dialog.component';
import { IAdvert } from '@app/_models/IAdvert';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-advert-actions',
  templateUrl: './advert-actions.component.html',
  styleUrls: ['./advert-actions.component.scss']
})
export class AdvertActionsComponent implements OnInit {

  loading: boolean;
  @Input() advert: IAdvert;

  adverts: IAdvert[];
  currentUser: IUser;

  constructor(private advertService: AdvertService,
              private _router: Router,
              private authService: AuthenticationService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
  }

  changeStatus(advertToUpdateId: number): void {
    this.advertService
    .getAdvert(advertToUpdateId)
    .subscribe((advert) => {
      this.advert = advert;

      let newStatus: string;
      if (this.advert.status === "Live") {
        newStatus = "Hidden";
      } else {
        newStatus = "Live"; 
      }

      const updatedAdvert = { ...this.advert, ...{ status: newStatus } };

      this.advertService
        .updateAdvert(updatedAdvert)
        .subscribe(() => {
          this.advertService.getUserAdverts(this.currentUser.id)
          .subscribe((adverts) => {
            this.loading = false;
            this.adverts = adverts;
            this._router
              .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
              .then(() => {
                this._router.navigate(["/myadverts"]);
              });
          });
        });

      
    });
  }

  openDeleteDialog(): void {
    this.matDialog.open(DeleteDialogComponent, {
      data: this.advert
    })
  }
}
