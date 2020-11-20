import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {
  URequest;
  constructor(private Auth: AuthService) { }

  ngOnInit() {
  
   this.Auth.displayPropertytList().subscribe((data)=>{this.URequest=data;console.log("IN Init Of property List Request")})
	}
}
