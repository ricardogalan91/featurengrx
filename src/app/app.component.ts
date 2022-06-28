import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductFeatures } from './Store/Features/Products/product-feature.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrxfeature2';

  constructor(private store:Store<any>){}

  ngOnInit(){
    this.store.dispatch(loadProductFeatures());
  }
}
