import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductFeature from './product-feature.reducer';

export const selectProductFeatureState = createFeatureSelector<fromProductFeature.State>(
  fromProductFeature.productFeatureFeatureKey
);

export const selectProducts= createSelector(
  selectProductFeatureState,
  (state)=>state.products
)

export const selectLoading= createSelector(
  selectProductFeatureState,
  (state)=>state.loading
)

export const selectProductsSuccess=createSelector(
  selectProducts,
  selectLoading,
  (products, loading)=>({products,loading})
)

export const selectElementByIdSuccess=createSelector(
  selectProductFeatureState,
  (state)=>state.productDetailed
)
