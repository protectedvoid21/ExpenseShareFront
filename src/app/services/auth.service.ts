import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { ServiceResponse, toResponse } from '../services/response';
import * as moment from 'moment';
import LoginToken from './token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'accounts';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<ServiceResponse<LoginToken>> {
    const url = `${environment.apiUrl}${this.baseUrl}/login`;
    
    const response = this.httpClient
      .post(url, { email, password })
      .pipe(map((response: any) => toResponse<LoginToken>(response)));
      
    response.subscribe((response: ServiceResponse<LoginToken>) => this.setSession(response.data!));
    
    return response;
  }

  register(email: string, username: string, password: string): Observable<ServiceResponse<LoginToken>> {
    const url = `${environment.apiUrl}${this.baseUrl}/register`;

    return this.httpClient
      .post(url, { email, username, password, confirmPassword: password })
      .pipe(map((response: any) => toResponse<LoginToken>(response.data)));
  }

  private setSession(authResult: LoginToken) {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', authResult.expirationDate.toString());
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration || '{}');

    return moment(expiresAt);
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
