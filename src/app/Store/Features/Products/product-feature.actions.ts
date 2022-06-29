import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/product';

export const loadProductFeatures = createAction(
  '[ProductFeature] Load ProductFeatures'
);

export const loadProductFeaturesSuccess = createAction(
  '[ProductFeature] Load ProductFeatures Success',
  props<{ products: Product[] }>()
);

export const loadProductFeaturesFailure = createAction(
  '[ProductFeature] Load ProductFeatures Failure',
  props<{ error: any }>()
);

export const postProductFeatures=createAction(
  '[ProductFeature] post product',
  props<{product:Product}>()
)

export const deleteProductFeatures=createAction(
  '[ProductFeature] delete product',
  props<{id:string}>()
)

export const loadElementByIdFeatures=createAction(
  '[ProductFeature] load element by id feature',
  props<{id:string}>()
)

export const loadElementByIdFeaturesSucces=createAction(
  '[ProductFeature] load element by id success',
  props<{productDetailed:Product}>()
  )


