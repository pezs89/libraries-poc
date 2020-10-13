import { createAction, props } from '@ngrx/store';

import { Movie } from '@app/movies/models/movie';

export const getMoviesRequest = createAction(
  '[Movies/Api] Get Movies Request'
);
export const getMoviesSuccess = createAction(
  '[Movies/Api] Get Movies Success',
  props<{ movies: Movie[] }>()
);
