import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';

@Injectable()
export class RoutesEffects {
  getRoutes$ = createEffect(() => EMPTY, { dispatch: false });

  constructor(private actions$: Actions) {}
}
