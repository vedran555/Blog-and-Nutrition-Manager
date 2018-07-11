import { Injectable } from '@angular/core';

@Injectable()
export class ScreenService {
  largeBreakpoint = 985;
  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', (event) => this.onResize(event));
   }

  isLarge(): boolean {
    return this.screenWidth > this.largeBreakpoint;
  }

  onResize($event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
