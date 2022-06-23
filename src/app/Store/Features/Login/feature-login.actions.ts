import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/user';

export const loadFeatureLogins = createAction(
  '[FeatureLogin] Load FeatureLogins'
);

export const loadFeatureLoginsSuccess = createAction(
  '[FeatureLogin] Load FeatureLogins Success',
  props<{ user:User }>()
);

export const loadFeatureLoginsFailure = createAction(
  '[FeatureLogin] Load FeatureLogins Failure',
  props<{ error: any }>()
);
