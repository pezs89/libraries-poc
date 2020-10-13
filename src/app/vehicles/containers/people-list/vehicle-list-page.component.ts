import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSwapiPeople from '@app/swapi-people/reducers';
import { PeopleApiActions } from '@app/swapi-people/actions';
import { Vehicle } from '@app/vehicles/models/vehicles';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: 'vehicle-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListPageComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;

  constructor(private store: Store<fromSwapiPeople.State>) {}

  ngOnInit() {
    this.store.dispatch(PeopleApiActions.getPeopleRequest());
    this.vehicles$ = this.store.pipe(select(fromSwapiPeople.selectAll));
  }
}
