import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  currentUser: IUser;
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private authService: AuthenticationService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.currentUser = this.data;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
