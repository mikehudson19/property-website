import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateTextPipe } from '@app/_helpers/truncate-text.pipe';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AdvertCardLargeComponent } from './advert-card-large/advert-card-large.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    SearchComponent,
    TruncateTextPipe,
    AdvertCardLargeComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgMaterialModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    TruncateTextPipe,
    NgMaterialModule,
    AdvertCardLargeComponent,
    ContactFormComponent
  ]
})
export class SharedModule { }
