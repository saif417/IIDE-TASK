import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { localStorageKeys } from 'src/constants/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm:FormGroup
  users:any=[];
  addUsers:any;
  ngOnInit(){
    this.userForm= new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
    });
    this.getUsers()
  }
  submit(){
    const value=this.userForm.value;
    this.users.push(value)
    localStorage.setItem(localStorageKeys.USERS_KEY,JSON.stringify(this.users)); 
    this.clear();
  }
  getUsers(){
    let usersString:any = localStorage.getItem(localStorageKeys.USERS_KEY)
    if(usersString){
      this.users=JSON.parse(usersString);
    }
  }
  deleteUser(index:any){
    this.users.splice(index,1)
    localStorage.setItem(localStorageKeys.USERS_KEY, JSON.stringify(this.users));
  }
  clear(){
    this.userForm.reset()
  }
}
