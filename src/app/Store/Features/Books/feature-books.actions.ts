import { createAction, props } from '@ngrx/store';

export const loadFeatureBookss = createAction(
  '[FeatureBooks] Load FeatureBookss'
);

export const loadFeatureBookssSuccess = createAction(
  '[FeatureBooks] Load FeatureBookss Success',
  props<{ data:any }>()
);

export const loadFeatureBookssFailure = createAction(
  '[FeatureBooks] Load FeatureBookss Failure',
  props<{ error: any }>()
);
