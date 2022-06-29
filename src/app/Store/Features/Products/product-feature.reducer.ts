import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/product';
import * as ProductFeatureActions from './product-feature.actions';

export const productFeatureFeatureKey = 'productFeature';

export interface State {
  products: Product[];
  loading:boolean,
  productDetailed:any
}

export const initialState: State = {
  products:[],
  loading:true,
  productDetailed:{}
};

export const reducer = createReducer(
  initialState,

  on(ProductFeatureActions.loadProductFeatures, (state) => {
    return {...state}
  }),
  on(ProductFeatureActions.loadProductFeaturesSuccess, (state, {products}) =>{
    return {...state, products, loading:false}
  }),
  on(ProductFeatureActions.loadProductFeaturesFailure, (state, action) => state),

  on(ProductFeatureActions.loadElementByIdFeaturesSucces, (state,{productDetailed})=>{
    return {...state,productDetailed}
  })

);
