import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  create(data: any) {
    return this.http.post(this.url + '/api/posts', data);
  }

  update(id: string, data: any) {
    return this.http.put(this.url + '/api/posts/' + id, data);
  }

  delete(id: string) {
    return this.http.delete(this.url + '/api/posts/' + id);
  }
}
