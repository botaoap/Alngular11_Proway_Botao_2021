import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show = true;
  contato = [{
    nome:'',
    idade:'',
    email:'',
  }];
  getValue(data:any){
    this.contato.push(data);
  }
  setShow(){
    this.getValue;
    this.show = !this.show;
  }
  

  

}
