import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // pega uma api em uma url 
  getData(){
    let url='https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}