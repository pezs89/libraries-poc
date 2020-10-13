import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleListPageComponent } from '@app/vehicles/containers/people-list/vehicle-list-page.component';

const routes: Routes = [{ path: '', component: VehicleListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
