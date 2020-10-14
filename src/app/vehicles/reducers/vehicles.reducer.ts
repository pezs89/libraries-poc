import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Vehicle } from '@app/vehicles/models/vehicles';
import { VehiclesActions, VehiclesApiActions } from '@app/vehicles/actions';
import { Pagination } from '@app/shared/models/pagination';

export const vehiclesFeatureKey = 'vehicles';

export interface State extends EntityState<Vehicle> {
  pagination: Pagination;
}

export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: (vehicle: Vehicle) => vehicle.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  pagination: null,
});

export const reducer = createReducer(
  initialState,
  on(VehiclesApiActions.getVehiclesSuccess, (state, { vehicles }) =>
    adapter.addMany(vehicles, state)
  ),
  on(VehiclesActions.paginateVehicles, (state, { pagination }) => ({
    ...state,
    pagination,
  }))
);
