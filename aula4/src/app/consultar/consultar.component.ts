import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {

  constructor(private users:UserService) { }

  userID: any;

  getId(idUser: any){
    this.users.getId(idUser).subscribe( result => {
      this.userID = result;
    })
  }

}
