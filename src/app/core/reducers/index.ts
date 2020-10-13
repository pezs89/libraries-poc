import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromRoutes from '@app/core/reducers/routes.reducer';
import * as fromTabs from '@app/core/reducers/tabs.reducer';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromRoutes.routesFeatureKey]: fromRoutes.State;
  [fromTabs.tabsFeatureKey]: fromTabs.State;
}

export interface State extends fromRoot.State {
  [coreFeatureKey]: CoreState;
}

export function reducers(state: CoreState | undefined, action: Action) {
  return combineReducers({
    [fromRoutes.routesFeatureKey]: fromRoutes.reducer,
    [fromTabs.tabsFeatureKey]: fromTabs.reducer,
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

export const selectTabsState = createSelector(
  selectCoreState,
  (state) => state[fromTabs.tabsFeatureKey]
);

export const selectTabs = createSelector(
  selectTabsState,
  (state) => state.tabs
);

export const selectActiveRouteName = createSelector(
  selectTabsState,
  (state) => state.activeRouteName
);
