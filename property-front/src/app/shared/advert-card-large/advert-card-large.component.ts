import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '@app/_models/IUser';
import { AuthenticationService, UserService } from '@app/_services';

@Component({
  selector: 'app-advert-card-large',
  templateUrl: './advert-card-large.component.html',
  styleUrls: ['./advert-card-large.component.scss']
})
export class AdvertCardLargeComponent implements OnInit {

  @Input() advert;
  authUser: IUser;
  isFavourite: boolean;

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.determineFavourite();
  }

  determineFavourite(): void {
    const authUserId = this.authService.currentUserValue.id;

    this.userService.getUser(authUserId)
      .subscribe(user => {
        this.authUser = user;
        if (this.authUser.favourites.includes(this.advert.id)) this.isFavourite = true;
      });
  }

  toggleFavourite(id: number): void {
    const authUserId = this.authService.currentUserValue.id;

    this.userService.getUser(authUserId).subscribe(user => {

      if (!this.isFavourite) {
        user.favourites.push(this.advert.id);
        this.isFavourite = true;
      } else {
        const newFavourites = user.favourites.filter(element => element !== this.advert.id);
        this.isFavourite = false;
        user.favourites = newFavourites;
      }

      this.userService.updateUser(user).subscribe();
      this.matSnackBar.open(`${this.isFavourite ? "Added to" : "Removed from"} your favourites`, "Close", {
        duration: 2000
      })
    })
  }
}
