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
    path: 'planets',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
    data: { title: 'planets' },
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
    data: { title: 'films' },
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./swapi-people/swapi-characters.module').then(
        (m) => m.SwapiPeopleModule
      ),
    data: { title: 'species' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
