import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie } from '@app/movies/models/movie';
import { MoviesApiActions } from '@app/movies/actions';
import * as fromMovies from '@app/movies/reducers';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'movies-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListPageComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(MoviesApiActions.getMoviesRequest());
    this.movies$ = this.store.pipe(select(fromMovies.selectAll));
  }
}
