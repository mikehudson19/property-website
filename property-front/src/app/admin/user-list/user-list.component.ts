import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/_models';
import { UserRole } from '@app/_models/user-role.enum';
import { UserService } from '@app/_services';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
    .subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit(): void {


  }

  viewUser(number) {}

  deleteUser(number) {
    const index = this.users.indexOf(number);
    this.users.splice(index);
    this.dataSource = new MatTableDataSource(this.users);
  }

}
