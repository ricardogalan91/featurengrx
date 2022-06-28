import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from '../Store/Features/Products/product-feature.reducer'
import { EffectsModule } from '@ngrx/effects';
import { ProductFeatureEffects } from '../Store/Features/Products/product-feature.effects';
import { MaterialModule } from '../shared/materials.module';


@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forFeature(fromProducts.productFeatureFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductFeatureEffects])
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsListModule { }
