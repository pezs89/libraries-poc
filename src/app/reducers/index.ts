import { InjectionToken } from '@angular/core';
import { MetaReducer, Action, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';

import * as fromCore from '@app/core/reducers';

export interface State {
  router: fromRouter.RouterReducerState<fromRouter.BaseRouterStoreState>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromCore.coreFeatureKey]: fromCore.reducers,
    router: fromRouter.routerReducer,
  }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
