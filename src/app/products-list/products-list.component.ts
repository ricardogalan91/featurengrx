import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product';
import { deleteProductFeatures, loadElementByIdFeatures, postProductFeatures } from '../Store/Features/Products/product-feature.actions';
import { selectElementByIdSuccess, selectProductsSuccess } from '../Store/Features/Products/product-feature.selectors';
import { ProductsListServiceService } from './products-list-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productos:any=[];
  subscriptions:Subscription;
  displayedColumns=['producto', 'precio', 'vendedor', 'delete', 'details'];
  constructor(private productsService:ProductsListServiceService, private store:Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectProductsSuccess).subscribe(
      val=>{
        if(val.products.length>0){
          this.productos=val.products
        }
      }
    )
    this.store.select(selectElementByIdSuccess).subscribe(
      val=>{
        console.log(val)
      }
    )
  }

  getProducts(){
    this.subscriptions.add(
      this.productsService.getProductsList().subscribe(
        (val)=>{
          this.productos=val;
        }
      )
    )
  }

  onDeleteElement(el:any){
    this.store.dispatch(deleteProductFeatures({id:el.id}))
  }

  onClickRow(el:any){}

  onAddElement(){
    let product={
      fname:'Ricardo',
      lname:'Galan',
      age:30,
      price:100,
      product:'Coffee',
      id:'100'
    }

    this.store.dispatch(postProductFeatures({product:product}))
  }

  onGetProductDetails(el:any){
    this.store.dispatch(loadElementByIdFeatures({id:el.id}))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
