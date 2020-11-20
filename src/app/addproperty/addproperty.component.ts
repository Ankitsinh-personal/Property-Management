import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  imgurl:String=""
  fileToUpload:File=null;

  constructor(private Auth: AuthService) { }

  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl=event.target.result;
      console.log(this.imgurl)        
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ngOnInit() {
  }


  RegisterProperty(event) {
    console.log("Inside add property");
    event.preventDefault();
    const target = event.target;
    var errorList = [];
	
	const title = target.querySelector("#title").value;
    const description = target.querySelector("#description").value;
    const image = this.imgurl;
	const country = target.querySelector("#country").value;
    const city = target.querySelector("#city").value;
    const state = target.querySelector("#state").value;


    if (errorList.length === 0)
         this.Auth.addProperty(title,description,image,country,city,state)
    }
}
