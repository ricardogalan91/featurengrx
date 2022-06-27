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

}
