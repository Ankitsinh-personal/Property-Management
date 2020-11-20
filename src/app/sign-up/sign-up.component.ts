import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { User } from '../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

RegisterDataEntry(event) {
    console.log("Inside signup");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const name = target.querySelector("#name").value;
    const password = target.querySelector("#password").value;
    const dob = target.querySelector("#dob").value;
    const address = target.querySelector("#address").value;
    const country = target.querySelector("#country").value;
    const city = target.querySelector("#city").value;
    const state = target.querySelector("#state").value;
    const pin = target.querySelector("#pin").value;
 
    if (errorList.length === 0)
         this.Auth.userRegister(name,password,dob,address,country,city,state,pin)
   
  }
}
