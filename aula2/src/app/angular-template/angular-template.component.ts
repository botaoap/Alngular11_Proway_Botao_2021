import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-template',
  templateUrl: './angular-template.component.html',
  styleUrls: ['./angular-template.component.css']
})
export class AngularTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show1 = true;
  show2 = true;
  showString = 'yes';

  // Test template for boolean
  setShow1(){
    this.show1 = !this.show1;
  }
  setShow2(){
    this.show2 = !this.show2;
  }

  // Test template for string
  setStringTrue(){
    this.showString = 'yes';
  }
  setStringFalse(){
    this.showString = 'no';
  }

  setString(){
    if(this.showString == 'yes'){
      this.showString = 'no';
    }else{
      this.showString = 'yes';
    }
  }

  // 
}
