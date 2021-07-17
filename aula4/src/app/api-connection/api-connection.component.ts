import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.css']
})
export class ApiConnectionComponent {

  listaUser: any;
  
  constructor(private users:UserService) { 
    this.users.getData().subscribe( result => {
      this.listaUser = result;
    })
  }

}
