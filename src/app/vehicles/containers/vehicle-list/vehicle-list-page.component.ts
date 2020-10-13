import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromVehiclesPeople from '@app/vehicles/reducers';
import { VehiclesApiActions } from '@app/vehicles/actions';
import { Vehicle } from '@app/vehicles/models/vehicles';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: 'vehicle-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListPageComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;

  constructor(private store: Store<fromVehiclesPeople.State>) {}

  ngOnInit() {
    this.store.dispatch(VehiclesApiActions.getVehiclesRequest());
    this.vehicles$ = this.store.pipe(select(fromVehiclesPeople.selectAll));
  }
}
