import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Vehicle } from '@app/vehicles/models/vehicles';
import { VehiclesApiActions } from '@app/vehicles/actions';

export const vehiclesFeatureKey = 'vehicles';

export interface State extends EntityState<Vehicle> {}

export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: (vehicle: Vehicle) => vehicle.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(VehiclesApiActions.getVehiclesSuccess, (state, { vehicles }) =>
    adapter.addMany(vehicles, state)
  )
);
