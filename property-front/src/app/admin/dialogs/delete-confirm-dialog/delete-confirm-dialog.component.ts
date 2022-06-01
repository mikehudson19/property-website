import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@app/_services';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  toBeDeleted;

  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private userService: UserService,
              private advertService: AdvertService) { }

  ngOnInit(): void {
    this.toBeDeleted = this.data.type;
  }

  delete(): void {
    const apiCall = this.data.type === "advert" ? this.advertService.deleteAdvert(this.data.id) : this.userService.deleteUser(this.data.id);

    apiCall.subscribe((x) => {
      this.dialogRef.close(x);
    });
  }
}
