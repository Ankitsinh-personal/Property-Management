import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { LoginComponent } from './login/login.component';
import { PropertylistComponent } from './propertylist/propertylist.component';


const routes: Routes = [
  { path:"",redirectTo:"register",pathMatch:"full"},
  { path:"register",component:SignUpComponent},
  { path:"addproperty",component:AddpropertyComponent},
  { path:"userlogin",component:LoginComponent},
  { path:"propertylist",component:PropertylistComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
