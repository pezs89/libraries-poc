import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared/shared.module';
import { MovieCardComponent } from '@app/movies/components/movie-card/movie-card.component';
import { MoviesListPageComponent } from '@app/movies/containers/people-list/movies-list-page.component';
import { MoviesRoutingModule } from '@app/movies/movies-routing.module';
import { MoviesEffects } from '@app/movies/effects/movies.effects';
import * as fromMovies from '@app/movies/reducers';

const CONTAINERS = [MoviesListPageComponent];
const COMPONENTS = [MovieCardComponent];

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.reducers),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  declarations: [CONTAINERS, COMPONENTS],
})
export class MoviesModule {}
