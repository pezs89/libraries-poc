import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  {
    path: 'people',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
    data: { title: 'people' },
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
    data: { title: 'planets' },
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
    data: { title: 'Movies' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
