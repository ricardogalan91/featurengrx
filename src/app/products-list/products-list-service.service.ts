import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsListServiceService {
  url= 'https://62b8883603c36cb9b7c894c3.mockapi.io/api/v1/products';
  constructor(private http: HttpClient) { }

  getProductsList():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  postProduct(product:any):Observable<Product>{
    return this.http.post<Product>(this.url, product)
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url+`/${product.id}`,product)
  }

  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.url+`/${id}`);
  }

  getProductDetail(id:string):Observable<Product>{
    return this.http.get<Product>(this.url+`/${id}`);
  }
}
