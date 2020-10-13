import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { VehiclesService } from '@app/core/services/vehicles/vehicles.service';
import { Vehicle } from '@app/vehicles/models/vehicles';
import { VehiclesApiActions } from '@app/vehicles/actions';

import { uuidGenerator } from '@app/utils/uuid-generator';
import { multiplyList } from '@app/utils/multiply-list';

@Injectable()
export class VehicleEffects {
  getVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesApiActions.getVehiclesRequest),
      switchMap(() =>
        this.vehicleService.getVehicles().pipe(
          map(({ results }) => {
            const transformedVehicleList = uuidGenerator(
              multiplyList(10, results)
            ) as Vehicle[];
            return VehiclesApiActions.getVehiclesSuccess({
              vehicles: transformedVehicleList,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private vehicleService: VehiclesService
  ) {}
}
