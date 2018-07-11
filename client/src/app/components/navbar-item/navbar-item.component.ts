import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../services/config.service';
import { Router, NavigationEnd  } from '@angular/router';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {
  @Input() item: Item;
  isActive = false;

  constructor(
    private router: Router,
    private screenService: ScreenService
  ) {
   }

  checkActiveRoute(route: string) {
    this.isActive = (route == this.item.route);
  }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);
    this.router.events
      .subscribe(
        (event) => {
          if(event instanceof NavigationEnd) {
            this.checkActiveRoute(event.url);
          }
        }
      );
  }

}
