import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@app/reducers';
import * as fromCore from '@app/core/reducers';
import { RoutesApiActions } from '@app/core/actions';
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
  routes$: Observable<NavLink[]>;
  notifications$: Observable<Notification[]>;
  notificationsCount$: Observable<number>;
  emails$: Observable<Email[]>;
  emailsCount$: Observable<number>;

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
  }
}
