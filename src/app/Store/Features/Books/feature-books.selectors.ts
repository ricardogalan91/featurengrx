import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeatureBooks from './feature-books.reducer';

export const selectFeatureBooksState = createFeatureSelector<fromFeatureBooks.State>(
  fromFeatureBooks.featureBooksFeatureKey
);