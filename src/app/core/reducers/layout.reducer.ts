import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '@app/core/actions';

export const layoutFeatureKey = 'layout';

export interface State {
  activeSidebarName: string;
}

export const initialState: State = {
  activeSidebarName: null,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.toggleSidebar, (state, { sidebarName }) => ({
    ...state,
    activeSidebarName:
      state.activeSidebarName === sidebarName ? null : sidebarName,
  }))
);
