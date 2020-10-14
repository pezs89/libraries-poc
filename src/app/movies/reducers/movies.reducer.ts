import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Movie } from '@app/movies/models/movie';
import { MoviesActions, MoviesApiActions } from '@app/movies/actions';
import { Pagination } from '@app/shared/models/pagination';

export const moviesFeatureKey = 'movies';

export interface State extends EntityState<Movie> {
  pagination: Pagination;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  pagination: null,
});

export const reducer = createReducer(
  initialState,
  on(MoviesApiActions.getMoviesSuccess, (state, { movies }) =>
    adapter.addMany(movies, state)
  ),
  on(MoviesActions.paginateMovies, (state, { pagination }) => ({
    ...state,
    pagination,
  }))
);
