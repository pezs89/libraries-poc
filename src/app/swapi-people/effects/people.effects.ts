import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { SwapiPeopleService } from '@app/core/services/swapi-people/swapi-people.service';
import { PeopleApiActions } from '@app/swapi-people/actions';

@Injectable()
export class PeopleEffects {
  getPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleApiActions.getPeopleRequest),
      mergeMap(() => {
        return this.peopleService
          .getPeople()
          .pipe(
            map(({ results }) =>
              PeopleApiActions.getPeopleSuccess({ people: results })
            )
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: SwapiPeopleService
  ) {}
}
