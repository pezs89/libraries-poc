import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromTabs from '@app/core/reducers';
import { TabsActions } from '@app/core/actions';
import { NavTab } from '@app/shared/models/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  routeChange$: Subscription;
  tabs$: Observable<NavTab[]>;
  activeRoute$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.initRouteChangeListener();
    this.initStoreSelectors();
  }

  onCloseTab(navTab: NavTab) {
    this.store.dispatch(TabsActions.removeTab({ tab: navTab }));
  }

  private initRouteChangeListener() {
    this.routeChange$ = this.store
      .pipe(select(fromRoot.selectUrl))
      .subscribe((route) => {
        if (route) {
          this.store.dispatch(TabsActions.routeChanged({ route }));
        }
      });
  }

  private initStoreSelectors() {
    this.tabs$ = this.store.pipe(select(fromTabs.selectTabs));
    this.activeRoute$ = this.store.pipe(select(fromTabs.selectActiveRouteName));
  }

  ngOnDestroy() {
    this.routeChange$.unsubscribe();
  }
}
