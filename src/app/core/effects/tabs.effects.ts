import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';

import * as fromTabs from '@app/core/reducers';
import { TabsActions } from '@app/core/actions';
import { newTabHandler } from '@app/core/utils/new-tab-handler';
import { removeTabHandler } from '@app/core/utils/remove-tab-handler';

@Injectable()
export class TabsEffects {
  routeChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TabsActions.routeChanged),
      withLatestFrom(this.store.pipe(select(fromTabs.selectTabs))),
      map(([{ route }, tabs]) => {
        const newTabs = newTabHandler(route, tabs);
        return TabsActions.newTabsCreated({
          tabs: newTabs,
          activeRouteName: route,
        });
      })
    )
  );

  removeTab$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TabsActions.removeTab),
      withLatestFrom(
        this.store.pipe(select(fromTabs.selectTabs)),
        this.store.pipe(select(fromTabs.selectActiveRouteName))
      ),
      map(([{ tab }, tabs, routeName]) => {
        const newTabs = removeTabHandler(tab, tabs, routeName);
        return TabsActions.removeTabSuccess({
          tabs: newTabs.list,
          activeRoute: newTabs.activeRouteName,
        });
      })
    )
  );

  removeTabSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TabsActions.removeTabSuccess),
        map((action) => {
          console.log(action);
          this.router.navigateByUrl(action.activeRoute);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromTabs.State>
  ) {}
}
