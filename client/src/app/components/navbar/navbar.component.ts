import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';
import { ScreenService } from '../../services/screen.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive = false;
  showMenu = false;
  logged: boolean;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private screenService: ScreenService,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.logged = this.authService.loggedIn();
  }

  ngDoCheck() {
    if(this.router.url === '/home' || this.router.url === '/') { this.isActive = true; }
    else { this.isActive = false; }
  }

  onLogout() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out!', { cssClass: 'alert-success' });
    this.configService.updateShowProperty();
    this.router.navigate(['/home']);
  }
  
}
