import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/Services/auth.service';
import { login, loginSuccess, loginFailure } from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  private isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); 
      const expirationTime = payload.exp * 1000;
      return expirationTime > Date.now(); 
    } catch (e) {
      return false;
    }
  }
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ credentials }) =>
          this.authService.login(credentials).pipe(
            map((response) => {
                if (this.isTokenValid(response.token)) {
                    localStorage.setItem('authToken', response.token); 
                    return loginSuccess({
                      user: { email: response.email, role: response.role, token: response.token },
                      token: response.token,
                    });
                  } else {
                    return loginFailure({ error: 'Token is invalid or expired' });
                  }
                }),
          catchError((error) =>
            of(loginFailure({ error: error.error?.message || 'Login failed' }))
          )
        )
      )
    )
  );

}
