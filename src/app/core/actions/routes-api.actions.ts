import { createAction, props } from '@ngrx/store';
import { NavLink } from '@app/shared/models/nav-link';

export const getRoutesRequest = createAction(
  '[Swapi Routes/API] Get Routes Request'
);

export const getRoutesSuccess = createAction(
  '[Swapi Routes/API] Get Routes Success',
  props<{ navLinks: NavLink[] }>()
);
