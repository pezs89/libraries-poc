import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '@app/core/actions';

export const layoutFeatureKey = 'layout';

export interface State {
  activeSidebarName: string;
  openedByKeyboard: boolean;
}

export const initialState: State = {
  activeSidebarName: null,
  openedByKeyboard: null,
};

export const reducer = createReducer(
  initialState,
  on(
    LayoutActions.toggleSidebar,
    (state, { sidebarName, openedByKeyboard }) => ({
      ...state,
      openedByKeyboard:
        openedByKeyboard === undefined ? openedByKeyboard : null,
      activeSidebarName:
        state.activeSidebarName === sidebarName && openedByKeyboard
          ? null
          : sidebarName,
    })
  )
);
