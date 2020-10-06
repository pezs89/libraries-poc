import { createAction, props } from '@ngrx/store';

import { Person } from '@app/swapi-people/models/person';

export const getPeopleRequest = createAction(
  '[Swapi People/Api] Get People Request'
);
export const getPeopleSuccess = createAction(
  '[Swapi People/Api] Get People Success',
  props<{ people: Person[] }>()
);
