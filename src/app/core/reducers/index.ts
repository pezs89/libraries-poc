import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromRoutes from '@app/core/reducers/routes.reducer';
import * as fromTabs from '@app/core/reducers/tabs.reducer';
import * as fromEmails from '@app/core/reducers/emails.reducer';
import * as fromNotifications from '@app/core/reducers/notifications.reducer';
import * as fromLayout from '@app/core/reducers/layout.reducer';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromRoutes.routesFeatureKey]: fromRoutes.State;
  [fromTabs.tabsFeatureKey]: fromTabs.State;
  [fromNotifications.notificationsFeatureKey]: fromNotifications.State;
  [fromEmails.emailsFeatureKey]: fromEmails.State;
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export interface State extends fromRoot.State {
  [coreFeatureKey]: CoreState;
}

export function reducers(state: CoreState | undefined, action: Action) {
  return combineReducers({
    [fromRoutes.routesFeatureKey]: fromRoutes.reducer,
    [fromTabs.tabsFeatureKey]: fromTabs.reducer,
    [fromNotifications.notificationsFeatureKey]: fromNotifications.reducer,
    [fromEmails.emailsFeatureKey]: fromEmails.reducer,
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
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

export const selectEmailsState = createSelector(
  selectCoreState,
  (state) => state[fromEmails.emailsFeatureKey]
);

export const selectEmails = createSelector(
  selectEmailsState,
  (state) => state.emails
);

export const selectEmailsCount = createSelector(
  selectEmails,
  (state) => state.length
);

export const selectNotificationsState = createSelector(
  selectCoreState,
  (state) => state[fromNotifications.notificationsFeatureKey]
);

export const selectNotifications = createSelector(
  selectNotificationsState,
  (state) => state.notifications
);

export const selectNotificationsCount = createSelector(
  selectNotifications,
  (state) => state.length
);

export const selectLayoutState = createSelector(
  selectCoreState,
  (state) => state[fromLayout.layoutFeatureKey]
);

export const selectSidebarName = createSelector(
  selectLayoutState,
  (state) => state.activeSidebarName
);
