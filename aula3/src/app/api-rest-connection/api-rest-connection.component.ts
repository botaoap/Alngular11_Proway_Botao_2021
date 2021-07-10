import { Component, OnInit } from '@angular/core';
// Import library to use UserService
import { UserService } from '../user.service';

@Component({
  selector: 'app-api-rest-connection',
  templateUrl: './api-rest-connection.component.html',
  styleUrls: ['./api-rest-connection.component.css']
})
export class ApiRestConnectionComponent {

  listaUser: any;

  constructor(private users:UserService) {
    this.users.getData().subscribe( data => {
      this.listaUser = data;
    })
  }
}
