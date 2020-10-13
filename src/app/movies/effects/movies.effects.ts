import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { MoviesApiActions } from '@app/movies/actions';
import { MoviesService } from '@app/core/services/movies/movies.service';
import { uuidGenerator } from '@app/utils/uuid-generator';
import { Movie, MovieApi } from '@app/movies/models/movie';
import { multiplyList } from '@app/utils/multiply-list';

@Injectable()
export class MoviesEffects {
  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesApiActions.getMoviesRequest),
      switchMap(() =>
        this.moviesService.getMovies().pipe(
          map(({ results }) => {
            const multipliedList = multiplyList<MovieApi>(100, results);
            const transMovieList = uuidGenerator<MovieApi>(
              multipliedList
            ) as Movie[];
            return MoviesApiActions.getMoviesSuccess({
              movies: transMovieList,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
