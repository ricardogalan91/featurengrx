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
