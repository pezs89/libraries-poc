import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { SwapiPeopleService } from '@app/core/services/swapi-people/swapi-people.service';
import { PeopleApiActions } from '@app/swapi-people/actions';
import { transformPeopleApiResponse } from '@app/swapi-people/utils/people-api-transform';
import { multiplyList } from '../utils/multiply-list';

@Injectable()
export class PeopleEffects {
  getPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleApiActions.getPeopleRequest),
      mergeMap(() =>
        this.peopleService.getPeople().pipe(
          map(({ results }) => {
            const transformedPeopleList = transformPeopleApiResponse(
              multiplyList(1000000, results)
            );
            return PeopleApiActions.getPeopleSuccess({
              people: transformedPeopleList,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: SwapiPeopleService
  ) {}
}
