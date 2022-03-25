import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unsaved-changes-dialog',
  templateUrl: './unsaved-changes-dialog.component.html',
  styleUrls: ['./unsaved-changes-dialog.component.scss']
})
export class UnsavedChangesDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UnsavedChangesDialogComponent>) { }

  ngOnInit(): void {
    
  }

  choose(choice: boolean) {
    this.dialogRef.close(choice);
  }

}
