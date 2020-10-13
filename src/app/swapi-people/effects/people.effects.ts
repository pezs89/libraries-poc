import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { SwapiPeopleService } from '@app/core/services/swapi-people/swapi-people.service';
import { PeopleApiActions } from '@app/swapi-people/actions';
import { uuidGenerator } from '@app/utils/uuid-generator';
import { multiplyList } from '@app/utils/multiply-list';
import { PersonApi } from '@app/swapi-people/models/person';
import { Person } from '@app/swapi-people/models/person';

@Injectable()
export class PeopleEffects {
  getPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleApiActions.getPeopleRequest),
      switchMap(() =>
        this.peopleService.getPeople().pipe(
          map(({ results }) => {
            const multipliedListElements = multiplyList<PersonApi>(10, results);
            const transformedPeopleList = uuidGenerator<PersonApi>(
              multipliedListElements
            ) as Person[];
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
