import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromRoutes from '@app/core/reducers/routes.reducer';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromRoutes.routesFeatureKey]: fromRoutes.State;
}

export interface State extends fromRoot.State {
  [coreFeatureKey]: CoreState;
}

export function reducers(state: CoreState | undefined, action: Action) {
  return combineReducers({
    [fromRoutes.routesFeatureKey]: fromRoutes.reducer,
  })(state, action);
}

// selectors
export const selectCoreState = createFeatureSelector<State, CoreState>(
  coreFeatureKey
);

export const selectRoutesState = createSelector(
  selectCoreState,
  (state) => state[fromRoutes.routesFeatureKey]
);

export const selectNavLinks = createSelector(
  selectRoutesState,
  (state) => state.navLinks
);
