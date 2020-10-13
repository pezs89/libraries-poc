import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@app/vehicles/models/vehicles';

export const getVehiclesRequest = createAction(
  '[Vehicles/Api] Get Vehicles Request'
);

export const getVehiclesSuccess = createAction(
  '[Vehicles/Api] Get Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);
