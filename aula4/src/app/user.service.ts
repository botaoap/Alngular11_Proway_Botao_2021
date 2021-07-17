import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // pegar as informações de uma API
  getData(){
    let url = 'http://localhost:3000/users';
    return this.http.get(url);
  }


}
