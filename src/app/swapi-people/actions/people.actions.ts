import { createAction, props } from '@ngrx/store';
import { Pagination } from '@app/shared/models/pagination';

export const paginatePeople = createAction(
  '[People List Page] People List Paginate',
  props<{ pagination: Pagination }>()
);
