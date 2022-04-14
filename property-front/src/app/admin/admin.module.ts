import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserViewComponent } from './user-view/user-view.component';



@NgModule({
  declarations: [UserListComponent, AdvertListComponent, UserViewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
