import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Person } from '@app/swapi-people/models/person';
import { PeopleActions, PeopleApiActions } from '@app/swapi-people/actions';
import { Pagination } from '@app/shared/models/pagination';

export const peopleFeatureKey = 'people';

export interface State extends EntityState<Person> {
  pagination: Pagination;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (person: Person) => person.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  pagination: null,
});

export const reducer = createReducer(
  initialState,
  on(PeopleApiActions.getPeopleSuccess, (state, { people }) =>
    adapter.addMany(people, state)
  ),
  on(PeopleActions.paginatePeople, (state, { pagination }) => ({
    ...state,
    pagination,
  }))
);
