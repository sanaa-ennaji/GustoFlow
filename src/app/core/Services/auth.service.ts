import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLoginDTO, ResponseLoginDTO, CreateAppUserDTO } from '../../shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/public';

  constructor(private http: HttpClient) {}

  login(credentials: RequestLoginDTO): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(`${this.apiUrl}/login`, credentials);
  }

  register(user: CreateAppUserDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
