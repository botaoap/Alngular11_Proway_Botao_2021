import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // pegar as informações de uma API
  getData(){
    // let é uma variável que fica apenas dentro desta função
    let url = 'http://localhost:3000/users';
    return this.http.get(url);
  }

  getId(id: any){
    let url = 'http://localhost:3000/users/' + id;
    return this.http.get(url);
  }

  postWithForm(form:any){
    let url = 'http://localhost:3000/users/';
    return this.http.post(url,form);
  }
  // Não é viável deste jeito
  // postUser(name: any, local:any){
  //   let url = 'http://localhost:3000/users/';
  //   let parameters = {
  //     "name": name,
  //     "location": local
  //   }
  //   return this.http.post(url,parameters);
  // }

  deleteUser(id: any){
    let url = 'http://localhost:3000/users/' + id;
    return this.http.delete(url);
  }


}
