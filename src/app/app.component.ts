import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './core/scss/app-mobile.core.scss',
    './core/scss/app-tablet.core.scss',
    './core/scss/app-desktop.core.scss',
    './core/scss/menu/menu.core.scss'
  ]
})

export class AppComponent {
  isMenuActive = false;

  closeMenu() {
    this.isMenuActive = false;
  }

  onActivate(event : RouterEvent) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}
