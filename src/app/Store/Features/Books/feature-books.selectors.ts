import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeatureBooks from './feature-books.reducer';

export const selectFeatureBooksState = createFeatureSelector<fromFeatureBooks.State>(
  fromFeatureBooks.featureBooksFeatureKey
);

export const selectBooks=createSelector(
  selectFeatureBooksState,
  (state)=>state.books
)

export const selectLoading=createSelector(
  selectFeatureBooksState,
  (state)=>state.loading
)

export const selectBooksList=createSelector(
  selectBooks,
  selectLoading,
  (books, loading)=>({books,loading})
)