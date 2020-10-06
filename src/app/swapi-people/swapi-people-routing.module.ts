import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from '@app/swapi-people/containers/people-list/people-list.component';
import { SharedModule } from 'primeng/api';

const routes: Routes = [{ path: '', component: PeopleListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiPeopleRoutingModule {}
