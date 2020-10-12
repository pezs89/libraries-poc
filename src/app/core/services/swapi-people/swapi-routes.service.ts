import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesApiResponse } from '@app/core/models/routes-api-response';
import { NavLink } from '@app/shared/models/nav-link';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwapiRoutesService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<RoutesApiResponse> {
    return this.http.get<RoutesApiResponse>(environment.apiUrl);
  }
}
