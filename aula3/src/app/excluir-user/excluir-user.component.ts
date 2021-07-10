import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-excluir-user',
  templateUrl: './excluir-user.component.html',
  styleUrls: ['./excluir-user.component.css']
})
export class ExcluirUserComponent {

  listaUser: any

  constructor(private user:UserService) {
    this.user.getData().subscribe( data => {
      this.listaUser = data;
    })
  }

  deleteId(id:any){
    this.user.delete(id).subscribe( 
      result => {
            console.log('Produto excluído com sucesso.');
      },
      erro => {
        if(erro.status == 404) {
          console.log('Produto não localizado.');
        }
      }  
    );    
  }
}