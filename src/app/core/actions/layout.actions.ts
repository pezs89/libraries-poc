import { createAction, props } from '@ngrx/store';

export const toggleSidebar = createAction(
  '[App Component] Toggle Sidebar By Key',
  props<{ sidebarName: string }>()
);
