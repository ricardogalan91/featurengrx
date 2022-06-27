import { TestBed } from '@angular/core/testing';

import { ProductsListServiceService } from './products-list-service.service';

describe('ProductsListServiceService', () => {
  let service: ProductsListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
