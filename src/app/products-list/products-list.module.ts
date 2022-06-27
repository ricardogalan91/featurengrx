import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from '../Store/Features/Products/product-feature.reducer'


@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromProducts.productFeatureFeatureKey, fromProducts.reducer),
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsListModule { }
