import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListPageComponent } from '@app/movies/containers/people-list/movies-list-page.component';

const routes: Routes = [{ path: '', component: MoviesListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
