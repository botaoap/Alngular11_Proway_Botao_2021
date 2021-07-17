import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  constructor(private users:UserService) { }

  userPost: any;

  postUser(name: any, local: any){
    this.users.postUser(name,local).subscribe( result => {
      this.userPost = result;
    })
  }
}
