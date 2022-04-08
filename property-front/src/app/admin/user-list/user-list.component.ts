import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/_models';
import { UserRole } from '@app/_models/user-role.enum';

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

  users: User[] = [
    {
      id: 1,
      email: "test@test",
      password: "test",
      firstName: "Test",
      lastName: "User",
      contactNumber: "0765698964",
      favourites: [1],
      role: UserRole.User
    },
    {
      id: 2,
      email: "test2@test",
      password: "test2",
      firstName: "Test2",
      lastName: "Test2Suranme",
      contactNumber: "0824593652",
      favourites: [],
      role: UserRole.User
    },
    {
      id: 3,
      email: "admin@prop.com",
      password: "admin",
      firstName: "Admin",
      lastName: "Admin",
      contactNumber: "0824593652",
      favourites: [],
      role: UserRole.Admin
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewUser(number) {}

  deleteUser(number) {}

}
