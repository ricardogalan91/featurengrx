import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFeatureLoginsSuccess } from '../Store/Features/Login/feature-login.actions';
import { selectUser } from '../Store/Features/Login/feature-login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let user={
      username:'ricardo',
      password:'jajaja'
    }
    this.store.dispatch(loadFeatureLoginsSuccess({user:user}))
  }

}
