import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edita-user',
  templateUrl: './edita-user.component.html',
  styleUrls: ['./edita-user.component.css']
})
export class EditaUserComponent {

  constructor(private user: UserService) { }

  userID: any;
  field: any;
  getId(idUser:any){
    this.user.getId(idUser).subscribe(result => {
      this.userID = result;
    })
  }

  clearField(){
    this.field = ' ';
  }
}
