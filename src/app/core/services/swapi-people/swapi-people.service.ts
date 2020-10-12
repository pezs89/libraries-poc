import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { PersonApi } from '@app/swapi-people/models/person';

@Injectable({ providedIn: 'root' })
export class SwapiPeopleService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<{ results: PersonApi[] }> {
    return this.http.get<{ results: PersonApi[] }>(
      `${environment.apiUrl}people`
    );
  }
}
