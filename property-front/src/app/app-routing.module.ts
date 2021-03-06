import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAdvertsComponent } from './adverts/myadverts/myadverts.component';
import { NotAuthGuard } from './_helpers';
import { AllAdvertsComponent } from './adverts/all-adverts/all-adverts.component';
import { EditAdvertComponent } from './adverts/edit-advert/edit-advert.component';
import { UnsavedGuard } from './adverts/unsaved.guard';
import { HomeComponent } from './home/home.component';
import { AdvertDetailComponent } from './adverts/advert-detail/advert-detail.component';
import { MyAccountComponent } from './accounts/my-account/my-account.component';
import { FavouriteAdvertsComponent } from './adverts/favourite-adverts/favourite-adverts.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'myadverts', component: MyAdvertsComponent, canActivate: [NotAuthGuard] },
    { path: 'editadvert/:id', component: EditAdvertComponent, canActivate: [NotAuthGuard], canDeactivate: [UnsavedGuard] },
    { path: 'alladverts', component: AllAdvertsComponent },
    { path: 'advertdetail/:id', component: AdvertDetailComponent },
    { path: 'myaccount', component: MyAccountComponent, canActivate: [ NotAuthGuard ] },
    { path: 'favourites', component: FavouriteAdvertsComponent, canActivate: [ NotAuthGuard ] },
    { path: 'admin', 
      component: AdminLayoutComponent, 
      children: [
        { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
    ]},         

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }


