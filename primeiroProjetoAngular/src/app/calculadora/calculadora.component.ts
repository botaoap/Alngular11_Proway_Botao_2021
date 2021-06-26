import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  // Implementação OnInit

  constructor() { }

  ngOnInit(): void {
  }

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
