import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromPeople from '@app/swapi-people/reducers/people.reducer';

export const swapiPeopleFeatureKey = 'swapiPeople';

export interface SwapiPeopleState {
  [fromPeople.peopleFeatureKey]: fromPeople.State;
}

export interface State extends fromRoot.State {
  [swapiPeopleFeatureKey]: SwapiPeopleState;
}

export function reducers(state: SwapiPeopleState | undefined, action: Action) {
  return combineReducers({
    [fromPeople.peopleFeatureKey]: fromPeople.reducer,
  })(state, action);
}

// selectors
export const selectSwapiPeopleState = createFeatureSelector<
  State,
  SwapiPeopleState
>(swapiPeopleFeatureKey);

export const selectPeopleEntityState = createSelector(
  selectSwapiPeopleState,
  (state) => state.people
);

export const { selectAll, selectTotal } = fromPeople.adapter.getSelectors(
  selectPeopleEntityState
);

export const selectPaginationState = createSelector(
  selectPeopleEntityState,
  (state) => state.pagination
);

export const selectPaginatedList = createSelector(
  selectAll,
  selectPaginationState,
  (people, pagination) => {
    if (!pagination) {
      return people;
    }
    return [...people].splice(pagination.first, pagination.rows);
  }
);
