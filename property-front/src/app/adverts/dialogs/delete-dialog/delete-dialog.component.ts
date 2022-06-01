import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdvertService } from '@app/_services/advert.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private advertService: AdvertService,
              private router: Router,
              public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public advert: any) { }

  ngOnInit(): void {
  }

  deleteAdvert(): void {
    this.advertService
    .deleteAdvert(this.advert.id)
    .subscribe(() => {
      // this.router
      //   .navigateByUrl("/RefreshComponent", { skipLocationChange: true })
      //   .then(() => {
      //     this.router.navigate(["/myadverts"]);
      //   });

        this.dialogRef.close();
    });
  }

}


