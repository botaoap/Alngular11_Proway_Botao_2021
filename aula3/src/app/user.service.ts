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

  getId(id:any){
    let url='https://jsonplaceholder.typicode.com/todos/' + id;
    return this.http.get(url);
  }

  delete(id: any){
    let url='https://jsonplaceholder.typicode.com/todos/' + id;
    return this.http.delete(url);
  }
}
