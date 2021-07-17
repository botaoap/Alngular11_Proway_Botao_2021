import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { UserService } from '../user.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {

  constructor(private users:UserService) { }

  deleteID: any;

  deleteUser(id: any){
    this.users.deleteUser(id).subscribe( result => {
      this.deleteID = result;
    })
  }
}
