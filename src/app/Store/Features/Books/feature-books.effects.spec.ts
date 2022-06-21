import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureBooksEffects } from './feature-books.effects';

describe('FeatureBooksEffects', () => {
  let actions$: Observable<any>;
  let effects: FeatureBooksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureBooksEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FeatureBooksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
