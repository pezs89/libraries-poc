import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Person } from '@app/swapi-people/models/person';
import { PeopleApiActions } from '../actions';

export const peopleFeatureKey = 'people';

export interface State extends EntityState<Person> {}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (person: Person) => person.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(PeopleApiActions.getPeopleSuccess, (state, { people }) =>
    adapter.addMany(people, state)
  )
);
