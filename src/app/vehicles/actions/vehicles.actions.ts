import { createAction, props } from '@ngrx/store';
import { Pagination } from '@app/shared/models/pagination';

export const paginateVehicles = createAction(
  '[Vehicle List Page] Vehicle List Page Paginate',
  props<{ pagination: Pagination }>()
);
