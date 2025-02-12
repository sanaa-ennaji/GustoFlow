import { ResponseLoginDTO } from '../../shared/models/auth.model';

export interface AuthState {
  user: ResponseLoginDTO | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};
