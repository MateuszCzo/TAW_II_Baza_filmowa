import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/api/films');
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.url + '/api/films/' + id);
  }

  create(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.post(this.url + '/api/films', data, { headers });
  }

  update(id: string, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.put(this.url + '/api/films/' + id, data, { headers });
  }

  delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.delete(this.url + '/api/films/' + id, { headers });
  }
}
