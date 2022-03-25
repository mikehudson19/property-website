import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAdvertsComponent } from "./myadverts";
import { EditAdvertComponent } from "./edit-advert/edit-advert.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AllAdvertsComponent } from "./all-adverts/all-adverts.component";
import { AdvertDetailComponent } from "./advert-detail/advert-detail.component";
import { SharedModule } from "@app/shared/shared.module";
import { FavouriteAdvertsComponent } from './favourite-adverts/favourite-adverts.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { UnsavedChangesDialogComponent } from './dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component';

@NgModule({
  declarations: [
    MyAdvertsComponent,
    EditAdvertComponent,
    AllAdvertsComponent,
    AdvertDetailComponent,
    FavouriteAdvertsComponent,
    DeleteDialogComponent,
    UnsavedChangesDialogComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule, 
    FormsModule,
    SharedModule
  ],
})
export class AdvertsModule {}
