import { createReducer, on } from '@ngrx/store';
import { NavLink } from '@app/shared/models/nav-link';
import { RoutesApiActions } from '../actions';

export const routesFeatureKey = 'routes';

export interface State {
  navLinks: NavLink[];
}

export const initialState: State = { navLinks: [] };

export const reducer = createReducer(
  initialState,
  on(RoutesApiActions.getRoutesSuccess, (state, { navLinks }) => ({
    ...state,
    navLinks,
  }))
);
