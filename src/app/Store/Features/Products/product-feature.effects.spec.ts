import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductFeatureEffects } from './product-feature.effects';

describe('ProductFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
