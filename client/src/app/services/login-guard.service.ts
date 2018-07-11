import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(
    private authService : AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  canActivate() {
    if(this.authService.loggedIn()) {
      this.flashMessages.show('You are already logged in. Redirecting to Home Page...', 
      {cssClass: 'alert-warning', timeout: 3500});
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3500);
      return false;
    }
    else {
      return true;
    }
  }

}
