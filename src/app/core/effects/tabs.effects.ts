import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';

import * as fromTabs from '@app/core/reducers';
import { TabsActions } from '@app/core/actions';
import { newTabHandler } from '@app/core/utils/new-tab-handler';

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

  constructor(
    private actions$: Actions,
    private store: Store<fromTabs.State>
  ) {}
}
