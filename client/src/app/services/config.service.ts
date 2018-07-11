import { Injectable } from '@angular/core';
import { navbarItems } from '../navbar-items';
import { AuthService } from './auth.service';

export interface Item {
  name?: string,
  route?: string,
  show?: boolean
}

@Injectable()
export class ConfigService {
  showItem = this.authService.loggedIn();
  navbarItems = [
    { name: 'Dashboard', route: '/dashboard', show: this.showItem },
    { name: 'Profile', route: '/profile', show: this.showItem },
    { name: 'Nutrition Manager', route: '/nutritionmanager', show: this.showItem },
    { name: 'Blog', route: '/blog', show: this.showItem },
    { name: 'Login', route: '/login', show: !this.showItem },
    { name: 'Register', route: '/register', show: !this.showItem },
  ];
  showMenu = false;
  
  constructor(
    private authService: AuthService
  ) { }

  // Update Show Property of the navbarItems
  updateShowProperty() {
    let len = this.navbarItems.length;
      for(let i=0; i<len-2; i++) {
        this.navbarItems[i].show = this.authService.loggedIn();
      }
      for(let i=len-2; i<len; i++) {
        this.navbarItems[i].show = !this.authService.loggedIn();
      }
  }

}
