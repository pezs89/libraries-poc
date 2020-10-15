import { createAction, props } from '@ngrx/store';
import { NavTab } from '@app/shared/models/tab';
import { TabNavigationKeys } from '@app/core/enums/tab-navigation-values';

export const routeChanged = createAction(
  '[Tabs Container] Route Changed',
  props<{ route: string }>()
);

export const newTabsCreated = createAction(
  '[Tabs Container] New Tabs Created',
  props<{ tabs: NavTab[]; activeRouteName: string }>()
);

export const removeTab = createAction(
  '[Tabs Container] Remove Tab',
  props<{ tab: NavTab }>()
);

export const changeRoute = createAction(
  '[Tabs Container] Tabs Container Change Route',
  props<{ direction: TabNavigationKeys }>()
);

export const removeTabSuccess = createAction(
  '[Tabs Effects] Remove Tab Success',
  props<{ tabs: NavTab[]; activeRoute: string }>()
);
