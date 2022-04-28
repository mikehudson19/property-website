import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { map } from 'rxjs/operators';
import { DeleteConfirmDialogComponent } from '../dialogs/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['firstName', 'lastName', 'email', 'dateCreated', 'contactNumber', 'role', 'view', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: User[] = [];

  constructor(private userService: UserService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getAll()
    .pipe(
      map(users => {
        const newArr = users.filter(x => {
          return x.role !== 'Admin';
        })
        return newArr;
      })
    )
    .subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit(): void {}

  deleteUser(userId) {
    const dialogRef = this.matDialog.open(DeleteConfirmDialogComponent, {
      data: {
        type: "user",
        id: userId
      }
    });

    dialogRef.afterClosed()
    .subscribe((users) => {
      if (users) {
        this.users = users.filter(user => user.role !== "Admin");
        this.dataSource = new MatTableDataSource(this.users);
      }
    });
  }
}
