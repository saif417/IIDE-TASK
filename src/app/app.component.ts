import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { localStorageKeys } from 'src/constants/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users:any=[];
  addUsers:any;
  ngOnInit(){
    this.getUsers()
  }
  submit(data:{firstname:string,lastname:string,email:string}){
    this.users.push(data)
    localStorage.setItem(localStorageKeys.USERS_KEY,JSON.stringify(this.users));  
  }
  getUsers(){
    let usersString:any = localStorage.getItem(localStorageKeys.USERS_KEY)
    this.users=JSON.parse(usersString);
  }
  deleteUser(index:any){
    this.users.splice(index,1)
    localStorage.setItem(localStorageKeys.USERS_KEY, JSON.stringify(this.users));
  }
}
