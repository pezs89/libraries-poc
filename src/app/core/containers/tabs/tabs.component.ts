import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromTabs from '@app/core/reducers';
import { TabsActions } from '@app/core/actions';
import { NavTab } from '@app/shared/models/tab';
import { TabNavigationKeys } from '@app/core/enums/tab-navigation-values';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  readonly tabsKeyCombinations = {
    navigateBack: 'keya',
    navigateForward: 'keyd',
  };

  routeChange$: Subscription;
  tabs$: Observable<NavTab[]>;
  activeRoute$: Observable<string>;

  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  ngOnInit() {
    this.initRouteChangeListener();
    this.initStoreSelectors();
  }

  onChangeRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  onNavChangeKeydown(keyCode: string) {
    const direction =
      keyCode === this.tabsKeyCombinations.navigateBack
        ? TabNavigationKeys.BACKWARD
        : TabNavigationKeys.FORWARD;
    this.store.dispatch(TabsActions.changeRoute({ direction }));
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
