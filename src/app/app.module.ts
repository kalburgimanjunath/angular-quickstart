import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { RegistrationComponent } from './feature/registration/registration.component';
import { AdminComponent } from './feature/admin/admin.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { ConnectionsComponent } from './feature/connections/connections.component';
import { SocialComponent } from './feature/social/social.component';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';


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

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    ProfileComponent,
    ConnectionsComponent,
    SocialComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    SocialLoginModule,
    BrowserModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
