import { createAction } from '@ngrx/store';

export const getRoutesRequest = createAction(
  '[Swapi Routes/API] Get Routes Request'
);

export const getRoutesSuccess = createAction(
  '[Swapi Routes/API] Get Routes Success'
);
