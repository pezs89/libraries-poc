import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@app/reducers';
import * as fromCore from '@app/core/reducers';
import { LayoutActions, RoutesApiActions } from '@app/core/actions';
import { NavLink } from '@app/shared/models/nav-link';
import { Notification } from '@app/core/models/notification';
import { Email } from '@app/core/models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly appKeyCombinations = {
    navigation: 'keys',
    notifications: 'keyn',
    mail: 'keym',
  };

  routes$: Observable<NavLink[]>;
  notifications$: Observable<Notification[]>;
  notificationsCount$: Observable<number>;
  emails$: Observable<Email[]>;
  emailsCount$: Observable<number>;
  activeSidebarName$: Observable<string>;
  openedByKeyboard$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(RoutesApiActions.getRoutesRequest());
    this.initStoreListeners();
  }

  initStoreListeners() {
    this.routes$ = this.store.pipe(select(fromCore.selectNavLinks));
    this.emails$ = this.store.pipe(select(fromCore.selectEmails));
    this.emailsCount$ = this.store.pipe(select(fromCore.selectEmailsCount));
    this.notifications$ = this.store.pipe(select(fromCore.selectNotifications));
    this.notificationsCount$ = this.store.pipe(
      select(fromCore.selectNotificationsCount)
    );
    this.activeSidebarName$ = this.store.pipe(
      select(fromCore.selectSidebarName)
    );
    this.openedByKeyboard$ = this.store.pipe(
      select(fromCore.selectOpenedByKeyboard)
    );
  }

  onKeydown(keyCode: string) {
    const sidebarKey = Object.keys(this.appKeyCombinations).find(
      (sidebar) => this.appKeyCombinations[sidebar] === keyCode
    );
    this.store.dispatch(
      LayoutActions.toggleSidebar({
        sidebarName: sidebarKey,
        openedByKeyboard: true,
      })
    );
  }

  onSidebarHidden() {
    this.store.dispatch(
      LayoutActions.toggleSidebar({
        sidebarName: null,
        openedByKeyboard: false,
      })
    );
  }

  onSidebarOpen(sidebarKey: string) {
    this.store.dispatch(
      LayoutActions.toggleSidebar({ sidebarName: sidebarKey })
    );
  }
}
