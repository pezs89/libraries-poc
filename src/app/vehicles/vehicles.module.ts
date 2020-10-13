import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { VehicleCardComponent } from '@app/vehicles/components/vehicle-card/vehicle-card.component';
import { VehicleListPageComponent } from '@app/vehicles/containers/vehicle-list/vehicle-list-page.component';
import { VehiclesRoutingModule } from '@app/vehicles/vehicles-routing.module';
import * as fromVehicles from '@app/vehicles/reducers';
import { SharedModule } from '@app/shared/shared.module';
import { VehicleEffects } from '@app/vehicles/effects/vehicle.effects';

const CONTAINERS = [VehicleListPageComponent];
const COMPONENTS = [VehicleCardComponent];

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      fromVehicles.vehiclesFeatureKey,
      fromVehicles.reducers
    ),
    EffectsModule.forFeature([VehicleEffects]),
  ],
  declarations: [CONTAINERS, COMPONENTS],
})
export class VehiclesModule {}
