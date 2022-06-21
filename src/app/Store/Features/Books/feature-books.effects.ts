import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as FeatureBooksActions from './feature-books.actions';


@Injectable()
export class FeatureBooksEffects {

  loadFeatureBookss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(FeatureBooksActions.loadFeatureBookss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FeatureBooksActions.loadFeatureBookssSuccess({ data })),
          catchError(error => of(FeatureBooksActions.loadFeatureBookssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
