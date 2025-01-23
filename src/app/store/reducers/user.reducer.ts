import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from '../state/auth.state';
import { login, loginSuccess, loginFailure, logout } from '../actions/auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user, token }) => ({ ...state, user, token, loading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(logout, () => initialAuthState)
);
