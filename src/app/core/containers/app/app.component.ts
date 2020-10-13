import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RoutesApiActions } from '@app/core/actions';
import { NavLink } from '@app/shared/models/nav-link';
import * as fromRoot from '@app/reducers';
import * as fromCore from '@app/core/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routes$: Observable<NavLink[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(RoutesApiActions.getRoutesRequest());
    this.routes$ = this.store.pipe(select(fromCore.selectNavLinks));
  }
}
