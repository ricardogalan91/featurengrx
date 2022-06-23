import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/user';
import * as FeatureLoginActions from './feature-login.actions';

export const featureLoginFeatureKey = 'featureLogin';

export interface State {
  user:User
}

export const initialState: State = {
  user:{
    username:'',
    password:''
  }
};

export const reducer = createReducer(
  initialState,

  on(FeatureLoginActions.loadFeatureLogins, state => state),
  on(FeatureLoginActions.loadFeatureLoginsSuccess, (state, {user}) =>{
    return {...state,user}
  }),
  on(FeatureLoginActions.loadFeatureLoginsFailure, (state, action) => state),

);
