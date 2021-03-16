import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private httpClient: HttpClient) { }

  getTodo(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
  setTodo(data: any): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  getEditTodo(id: number): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/'+id);
  }
  setPatchTodo(data: any): Observable<any> {
    return this.httpClient.patch('https://jsonplaceholder.typicode.com/posts/1', data);
  }
}
