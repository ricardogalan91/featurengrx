import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../shared/product';
import { selectProductsSuccess } from '../Store/Features/Products/product-feature.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[]=[];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectProductsSuccess).subscribe(
      (val)=>{
        console.log(val)
      }
    )
  }
}
