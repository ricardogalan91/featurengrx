import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from '../Store/Features/Login/feature-login.reducer'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLogin.featureLoginFeatureKey, fromLogin.reducer)
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
