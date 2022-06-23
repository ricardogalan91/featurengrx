import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as FeatureLoginActions from './feature-login.actions';


@Injectable()
export class FeatureLoginEffects {

  loadFeatureLogins$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(FeatureLoginActions.loadFeatureLogins),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FeatureLoginActions.loadFeatureLoginsSuccess({ data })),
          catchError(error => of(FeatureLoginActions.loadFeatureLoginsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
