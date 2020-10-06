import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwapiPeopleRoutingModule } from '@app/swapi-people/swapi-people-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { PeopleListPageComponent } from '@app/swapi-people/containers/people-list/people-list-page.component';

const CONTAINERS = [PeopleListPageComponent];

@NgModule({
  imports: [CommonModule, SwapiPeopleRoutingModule, SharedModule],
  exports: [],
  declarations: [CONTAINERS],
  providers: [],
})
export class SwapiPeopleModule {}
