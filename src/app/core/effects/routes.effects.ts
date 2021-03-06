import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { RoutesApiActions } from '@app/core/actions';
import { SwapiRoutesService } from '@app/core/services/swapi-routes/swapi-routes.service';
import { routesApiResponseHelper } from '@app/core/utils/routes-api-response-helper';

@Injectable()
export class RoutesEffects {
  getRoutes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoutesApiActions.getRoutesRequest),
      switchMap(() =>
        this.swapiRoutesService.getRoutes().pipe(
          map((response) => {
            const transformedRoutesApiResponse = routesApiResponseHelper(
              response
            ).filter(
              (routes) =>
                routes.name === 'vehicles' ||
                routes.name === 'people' ||
                routes.name === 'films'
            );
            return RoutesApiActions.getRoutesSuccess({
              navLinks: transformedRoutesApiResponse,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private swapiRoutesService: SwapiRoutesService
  ) {}
}
