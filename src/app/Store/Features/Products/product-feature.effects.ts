import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as ProductFeatureActions from './product-feature.actions';
import { ProductsListServiceService } from 'src/app/products-list/products-list-service.service';


@Injectable()
export class ProductFeatureEffects {

  loadProductFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ProductFeatureActions.loadProductFeatures),
      mergeMap(()=>this.productsService.getProductsList()
      .pipe(
        map(products=>ProductFeatureActions.loadProductFeaturesSuccess({products})),
        catchError(()=>EMPTY)
      ))
    )
  }
  )

  postProductFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ProductFeatureActions.postProductFeatures),
      mergeMap((product)=>this.productsService.postProduct(product.product)
      .pipe(
        map(()=>ProductFeatureActions.loadProductFeatures()),
        catchError(()=>EMPTY)
      )
      )
    )
  }
  )

  deleteProductFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ProductFeatureActions.deleteProductFeatures),
      mergeMap((product)=>this.productsService.deleteProduct(product.id)
      .pipe(
        map(()=>ProductFeatureActions.loadProductFeatures()),
        catchError(()=>EMPTY)
      )
      )
    )
  }
  )

  loadProductDetailedFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(ProductFeatureActions.loadElementByIdFeatures),
      mergeMap((product)=>this.productsService.getProductDetail(product.id)
      .pipe(
        map((productDetailed)=>ProductFeatureActions.loadElementByIdFeaturesSucces({productDetailed})),
        catchError(()=>EMPTY)
      )
      )
    )
  }
  )

  constructor(private actions$: Actions, private productsService:ProductsListServiceService) {}
}
