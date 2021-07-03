import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carros=["Fusca","Kombi","Brasilia","A 45 S","Corola",""]

}
