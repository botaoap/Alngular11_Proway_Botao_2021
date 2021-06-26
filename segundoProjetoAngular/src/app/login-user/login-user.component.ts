import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = '';
  password = '';

  setUsername(user:any){
    this.username = user;
  }
  setPassword(pwd:any){
    this.password = (pwd);
  }

}
