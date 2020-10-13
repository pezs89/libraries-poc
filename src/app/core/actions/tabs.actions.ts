import { createAction, props } from '@ngrx/store';
import { NavTab } from '@app/shared/models/tab';

export const routeChanged = createAction(
  '[Tabs] Route Changed',
  props<{ route: string }>()
);

export const newTabsCreated = createAction(
  '[Tabs] New Tabs Created',
  props<{ tabs: NavTab[]; activeRouteName: string }>()
);
