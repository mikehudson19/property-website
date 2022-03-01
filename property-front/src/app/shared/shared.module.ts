import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateTextPipe } from '@app/_helpers/truncate-text.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    TruncateTextPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    TruncateTextPipe
  ]
})
export class SharedModule { }
