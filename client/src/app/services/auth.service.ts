import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';
import { Token } from "../models/token";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  //logowanie i zapisanie tokena do lacal storage
  authenticate(credentials: any) {
    return this.http.post(this.url + '/user/login', {
      email: credentials.email,
      password: credentials.password
    })
    .pipe(
      map((result: Token | any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
      return false;
      })
    );
  }

  //tworzenie nowego uzytkownika
  create(credentials: any) {
    return this.http.post(this.url + '/user/register', credentials)
    .pipe(
      map((result: Token | any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
      return false;
      })
    );
  }

  //logout
  logout() {
    localStorage.removeItem('token');
  }

  //pobieranie uzytkownika
  get currentUser() {
    const token = this.getToken();
    if(!token) return null;
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  //sprawdzanie czy uzytkownik jest zalogowany
  isLoggedIn() {
    const jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem('token');
    if(!token) return false;
    return !(jwtHelperService.isTokenExpired(token));
  }

}
