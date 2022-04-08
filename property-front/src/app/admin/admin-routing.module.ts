import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // { path: '', component: UserListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'advert-list', component: AdvertListComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
