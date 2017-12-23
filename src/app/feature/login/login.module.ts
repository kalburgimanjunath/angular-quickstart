import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig} from "angular4-social-login";

import {  GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { LoginComponent } from './login.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("561602290896109")
  }
]);


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SocialLoginModule.initialize(config),
    HttpClientModule
   ]
})

export class LoginModule { 
  
}


