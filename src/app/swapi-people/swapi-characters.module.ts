import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwapiPeopleRoutingModule } from '@app/swapi-people/swapi-people-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { PeopleListComponent } from '@app/swapi-people/containers/people-list/people-list.component';
import { PrimeNgModule } from '@app/primeng/primeng.module';

const CONTAINERS = [PeopleListComponent];

@NgModule({
  imports: [
    CommonModule,
    SwapiPeopleRoutingModule,
    SharedModule,
  ],
  exports: [],
  declarations: [CONTAINERS],
  providers: [],
})
export class SwapiPeopleModule {}
