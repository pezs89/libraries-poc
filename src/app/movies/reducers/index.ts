import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromMovies from '@app/movies/reducers/movies.reducer';

export const moviesFeatureKey = 'moviesModule';

export interface MoviesState {
  [fromMovies.moviesFeatureKey]: fromMovies.State;
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MoviesState;
}

export function reducers(state: MoviesState | undefined, action: Action) {
  return combineReducers({
    [fromMovies.moviesFeatureKey]: fromMovies.reducer,
  })(state, action);
}

// selectors
export const selectMoviesState = createFeatureSelector<State, MoviesState>(
  moviesFeatureKey
);

export const selectMoviesEntityState = createSelector(
  selectMoviesState,
  (state) => state[fromMovies.moviesFeatureKey]
);

export const { selectAll, selectTotal } = fromMovies.adapter.getSelectors(
  selectMoviesEntityState
);
