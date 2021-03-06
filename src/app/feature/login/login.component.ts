import { Component, OnInit } from '@angular/core';


import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  user: SocialUser;
  friends: SocialUser;
  
    constructor(private authService: AuthService) { }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(user);
      });
      
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    FrindListWithFB(): void {
      this.authService.friendList(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }

  
  

}


