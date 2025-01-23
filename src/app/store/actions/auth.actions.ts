import { createAction, props } from '@ngrx/store';
import { RequestLoginDTO, ResponseLoginDTO } from '../../shared/models/auth.model';

export const login = createAction('[Auth API] Login', props<{ credentials: RequestLoginDTO }>());
export const loginSuccess = createAction('[Auth API] Login Success', props<{ user: ResponseLoginDTO; token: string }>());
export const loginFailure = createAction('[Auth API] Login Failure', props<{ error: string }>());
export const logout = createAction('[Auth API] Logout');
