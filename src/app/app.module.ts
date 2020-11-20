import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthService } from "./auth.service";
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { LoginComponent } from './login/login.component';
import { PropertylistComponent } from './propertylist/propertylist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AddpropertyComponent,
    LoginComponent,
    PropertylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
