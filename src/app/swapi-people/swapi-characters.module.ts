import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SwapiPeopleRoutingModule } from '@app/swapi-people/swapi-people-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { PeopleListPageComponent } from '@app/swapi-people/containers/people-list/people-list-page.component';
import { PeopleCardComponent } from '@app/swapi-people/components/people-card/people-card.component';

import * as fromSwapiPeople from '@app/swapi-people/reducers';
import { PeopleEffects } from '@app/swapi-people/effects/people.effects';

const CONTAINERS = [PeopleListPageComponent];
const COMPONENTS = [PeopleCardComponent];

@NgModule({
  imports: [
    CommonModule,
    SwapiPeopleRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      fromSwapiPeople.swapiPeopleFeatureKey,
      fromSwapiPeople.reducers
    ),
    EffectsModule.forFeature([PeopleEffects]),
  ],
  declarations: [CONTAINERS, COMPONENTS],
})
export class SwapiPeopleModule {}
