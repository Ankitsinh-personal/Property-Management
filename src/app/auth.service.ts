import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private router: Router) { }

 

	userRegister(name,password,dob,address,country,city,state,pin)
  	{
    console.log("Inside signUpData Auth service");
    this.http.post("http://localhost:8000/userentry", {name,password,dob,address,country,city,state,pin})
      .subscribe((res: any)=>{
            if(res.isSucceed){           
                  this.router.navigate(['/userlogin']);
                  }
      });
  	}
 

  addProperty(title,description,image,country,city,state)
    {
    console.log("Inside addproperty auth service");
    this.http.post("http://localhost:8000/addproperty", {title,description,image,country,city,state})
      .subscribe((res: any)=>{
            if(res.isSucceed){           
                  this.router.navigate(['/propertylist']);
                  }
      });
    }
 

  userLogin(name,password)
    {
    console.log("Inside Login Auth service");
    this.http.post("http://localhost:8000/userlogin", {name,password})
      .subscribe((res: any)=>{
      if(res.isLogin) {
        console.log("name from service:"+res.userd['name'])
        sessionStorage.setItem('name',res.userd['name'])
        this.router.navigate(['/addproperty']);
      }
      if(!res.isLogin) {
                  this.router.navigate(['/register']);
      }
      });
    }


  displayPropertytList()
  {
    console.log("In Display propertylist");
    return this.http.post('http://localhost:8000/propertylist',{})
  }
 }