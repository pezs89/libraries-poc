import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesApiResponse } from '@app/core/models/routes-api-response';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class SwapiRoutesService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<RoutesApiResponse> {
    return this.http.get<RoutesApiResponse>(environment.apiUrl);
  }
}
