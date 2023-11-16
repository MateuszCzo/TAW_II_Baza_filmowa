import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000/api/films';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  create(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.post(this.url, data, { headers });
  }

  update(id: string, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.put(this.url + '/' + id, data, { headers });
  }

  delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.delete(this.url + '/' + id, { headers });
  }

  addUpdRating(id: string, data: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.authService.getToken() }`);
    return this.http.post(this.url + '/addUpdRating/' + id, data, { headers });
  }

}
