import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieApi } from '@app/movies/models/movie';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<{ results: MovieApi[] }> {
    return this.http.get<{ results: MovieApi[] }>(
      `${environment.apiUrl}films/`
    );
  }
}
