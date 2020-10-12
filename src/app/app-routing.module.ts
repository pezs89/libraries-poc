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
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
