import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/book';

export const loadFeatureBookss = createAction(
  '[FeatureBooks] Load FeatureBookss'
);

export const loadFeatureBookssSuccess = createAction(
  '[FeatureBooks] Load FeatureBookss Success',
  props<{ books:Book[] }>()
);

export const loadFeatureBookssFailure = createAction(
  '[FeatureBooks] Load FeatureBookss Failure',
  props<{ error: any }>()
);
