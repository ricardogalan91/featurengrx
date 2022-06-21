import { Action, createReducer, on } from '@ngrx/store';
import * as FeatureBooksActions from './feature-books.actions';

export const featureBooksFeatureKey = 'featureBooks';

export interface State {
}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(FeatureBooksActions.loadFeatureBookss, state => state),
  on(FeatureBooksActions.loadFeatureBookssSuccess, (state, action) => state),
  on(FeatureBooksActions.loadFeatureBookssFailure, (state, action) => state),

);
