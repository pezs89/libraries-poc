import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/swapi-people', pathMatch: 'full' },
  {
    path: 'swapi-people',
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
