import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-seller-dialog',
  templateUrl: './contact-seller-dialog.component.html',
  styleUrls: ['./contact-seller-dialog.component.scss']
})
export class ContactSellerDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContactSellerDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(event) {
    if (event) this.dialogRef.close();
  }

}
