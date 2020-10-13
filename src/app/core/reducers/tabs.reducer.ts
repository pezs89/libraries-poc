import { createReducer, on } from '@ngrx/store';

import { NavTab } from '@app/shared/models/tab';
import { TabsActions } from '@app/core/actions';

export const tabsFeatureKey = 'tabs';

export interface State {
  tabs: NavTab[];
  activeRouteName: string;
}

export const initialState: State = {
  tabs: [],
  activeRouteName: null,
};

export const reducer = createReducer(
  initialState,
  on(TabsActions.newTabsCreated, (state, { tabs, activeRouteName }) => ({
    ...state,
    tabs: [...tabs],
    activeRouteName,
  }))
);
