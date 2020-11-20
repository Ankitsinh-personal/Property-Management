import { AuthService } from "../auth.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  userLogin(event) {
    console.log("Inside Login");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const name = target.querySelector("#name").value;
    const password = target.querySelector("#password").value;

 
    if (errorList.length === 0)
         this.Auth.userLogin(name,password)
   
  }

}
