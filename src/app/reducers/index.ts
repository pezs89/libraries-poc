import { InjectionToken } from '@angular/core';
import {
  MetaReducer,
  Action,
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';

import * as fromCore from '@app/core/reducers';

export const routerFeatureKey = 'router';

export interface State {
  router: fromRouter.RouterReducerState<fromRouter.BaseRouterStoreState>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromCore.coreFeatureKey]: fromCore.reducers,
    [routerFeatureKey]: fromRouter.routerReducer,
  }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// selectors

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState
>(routerFeatureKey);

export const { selectCurrentRoute, selectUrl } = fromRouter.getSelectors(selectRouter);
