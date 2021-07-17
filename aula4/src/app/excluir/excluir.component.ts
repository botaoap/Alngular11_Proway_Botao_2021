import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { UserService } from '../user.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {

  listaUser: any
  constructor(private users:UserService) {
    this.users.getData().subscribe( result => {
      this.listaUser = result;
    })
   }

  deleteID: any;

  deleteUser(id: any){
    this.users.deleteUser(id).subscribe( result => {
      this.deleteID = result;
      location.reload();
    })
  }
}
