import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Movie } from '@app/movies/models/movie';
import { MoviesApiActions } from '@app/movies/actions';

export const moviesFeatureKey = 'movies';

export interface State extends EntityState<Movie> {}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.uuid,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(MoviesApiActions.getMoviesSuccess, (state, { movies }) =>
    adapter.addMany(movies, state)
  )
);
