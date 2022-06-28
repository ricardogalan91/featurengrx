import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product';
import { selectProductsSuccess } from '../Store/Features/Products/product-feature.selectors';
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
  constructor(private productsService:ProductsListServiceService) { }

  ngOnInit(): void {
    this.subscriptions=new Subscription();
    this.getProducts();
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
    this.productsService.deleteProduct(el.id).subscribe(
      (val)=>{
        this.getProducts();
      }
    )
  }

  onClickRow(el:any){}

  onAddElement(){

  }

  onGetProductDetails(el:any){

  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
