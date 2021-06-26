import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*username = '';
  password = '';

  setUsername(user:any){
    this.username = user;
  }
  setPassword(pwd:any){
    this.password = pwd;
  }
  */
  resultado = 0;

  somar(n1:any, n2:any){
    this.resultado = Number(n1) + Number(n2);
  }
  subtrair(n1:any, n2:any){
    this.resultado = Number(n1) - Number(n2);
  }
  multiplicar(n1:any, n2:any){
    this.resultado = Number(n1) * Number(n2);
  }
  dividir(n1:any, n2:any){
    this.resultado = Number(n1) / Number(n2);
  }
  limpar(){
    this.resultado = 0;
  }
}
