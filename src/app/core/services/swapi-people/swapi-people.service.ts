import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Person } from '@app/swapi-people/models/person';

@Injectable({ providedIn: 'root' })
export class SwapiPeopleService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<{ results: Person[] }> {
    return this.http.get<{ results: Person[] }>(`${environment.apiUrl}/people`);
  }
}
