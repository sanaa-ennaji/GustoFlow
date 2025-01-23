import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/Services/auth.service';
import { login, loginSuccess, loginFailure } from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    )
  );
}
