import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from '../Store/Features/Books/feature-books.reducer'


@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBooks.featureBooksFeatureKey, fromBooks.reducer)
  ],
  exports:[
    BooksListComponent
  ]
})
export class BooksListModule { }
