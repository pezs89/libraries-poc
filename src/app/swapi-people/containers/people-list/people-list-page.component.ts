import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSwapiPeople from '@app/swapi-people/reducers';
import { Person } from '@app/swapi-people/models/person';
import { PeopleApiActions } from '@app/swapi-people/actions';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListPageComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private store: Store<fromSwapiPeople.State>) {}

  ngOnInit() {
    this.store.dispatch(PeopleApiActions.getPeopleRequest());
    this.people$ = this.store.pipe(select(fromSwapiPeople.selectAll));
  }
}
