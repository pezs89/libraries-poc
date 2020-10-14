import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromVehicles from '@app/vehicles/reducers/vehicles.reducer';

export const vehiclesFeatureKey = 'vehicles';

export interface VehiclesState {
  [fromVehicles.vehiclesFeatureKey]: fromVehicles.State;
}

export interface State extends fromRoot.State {
  [vehiclesFeatureKey]: VehiclesState;
}

export function reducers(state: VehiclesState | undefined, action: Action) {
  return combineReducers({
    [fromVehicles.vehiclesFeatureKey]: fromVehicles.reducer,
  })(state, action);
}

// selectors
export const selectVehiclesState = createFeatureSelector<State, VehiclesState>(
  vehiclesFeatureKey
);

export const selectVehiclesEntityState = createSelector(
  selectVehiclesState,
  (state) => state[fromVehicles.vehiclesFeatureKey]
);

export const { selectAll, selectTotal } = fromVehicles.adapter.getSelectors(
  selectVehiclesEntityState
);

export const selectPaginatonState = createSelector(
  selectVehiclesEntityState,
  (state) => state.pagination
);

export const selectPaginatedVehicles = createSelector(
  selectAll,
  selectPaginatonState,
  (vehicles, pagination) => {
    if (!pagination) {
      return vehicles;
    }
    return [...vehicles].splice(pagination.first, pagination.rows);
  }
);
