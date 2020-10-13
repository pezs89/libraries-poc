import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { VehicleApi } from '@app/vehicles/models/vehicles';

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<{ results: VehicleApi[] }> {
    return this.http.get<{ results: VehicleApi[] }>(
      `${environment.apiUrl}vehicles`
    );
  }
}
