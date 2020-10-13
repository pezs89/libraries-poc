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
    data: { title: 'People' },
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./vehicles/vehicles.module').then(
        (m) => m.VehiclesModule
      ),
    data: { title: 'Vehicles' },
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
