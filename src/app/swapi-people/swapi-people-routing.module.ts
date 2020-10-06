import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListPageComponent } from '@app/swapi-people/containers/people-list/people-list-page.component';

const routes: Routes = [{ path: '', component: PeopleListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiPeopleRoutingModule {}
