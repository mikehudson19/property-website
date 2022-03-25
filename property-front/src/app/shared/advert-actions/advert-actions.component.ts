import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
              private authService: AuthenticationService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
  }

  changeStatus(): void {
      this.advert.status = this.advert.status == "Live" ? "Hidden" : "Live";

      const updatedAdvert = { ...this.advert };

      this.advertService
        .updateAdvert(updatedAdvert)
        .subscribe();
  }

  openDeleteDialog(): void {
    this.matDialog.open(DeleteDialogComponent, {
      data: this.advert
    })
  }
}
