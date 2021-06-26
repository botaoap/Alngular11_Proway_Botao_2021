import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resultado = 0;

  soma(num1: any, num2:any){
    this.resultado = Number(num1) + Number(num2);
  }
  subtrai(num1: any, num2:any){
    this.resultado = Number(num1) - Number(num2);
  }
  multiplica(num1: any, num2:any){
    this.resultado = Number(num1) * Number(num2);
  }
  divide(num1: any, num2:any){
    this.resultado = Number(num1) / Number(num2);
  }
}
