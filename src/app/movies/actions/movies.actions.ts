import { createAction, props } from '@ngrx/store';
import { Pagination } from '@app/shared/models/pagination';

export const paginateMovies = createAction(
  '[Movies List Page] Paginate Movies',
  props<{ pagination: Pagination }>()
);
