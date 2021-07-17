import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  listaUser: any;
  
  constructor(private users:UserService) {
    this.users.getData().subscribe( result => {
      this.listaUser = result;
    })
   }

  
  userPost: any;

  // Não é viável deste jeito
  // postUser(name: any, local: any){
  //   this.users.postUser(name,local).subscribe( result => {
  //     this.userPost = result;
  //   })
  // }

  getValues(data: any){
    this.users.postWithForm(data).subscribe( result=> {
      this.userPost = result;
      location.reload();
    })
  }
}
