import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/shared/book';
import * as FeatureBooksActions from './feature-books.actions';

export const featureBooksFeatureKey = 'featureBooks';

export interface State {
  books: Book[];
  loading:boolean;
}

export const initialState: State = {
  books:[],
  loading:true
};

export const reducer = createReducer(
  initialState,

  on(FeatureBooksActions.loadFeatureBookss, state => state),
  on(FeatureBooksActions.loadFeatureBookssSuccess, (state,{books})=>{
    return {...state, books, loading:false}
  }),
  on(FeatureBooksActions.loadFeatureBookssFailure, (state, action) => state),

);
