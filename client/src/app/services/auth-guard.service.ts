import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  redirectUrl;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if(!this.authService.loggedIn()) {
      this.redirectUrl = state.url;
      this.flashMessages.show('You have to be logged in to see this page. Redirecting to Login Page...', 
      { cssClass: 'alert-danger', timeout: 2500 });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3500);
      return false;
    }
    else {
      return true;
    }
  }

}
