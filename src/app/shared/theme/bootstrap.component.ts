import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [
    'bootstrap.component.scss'
  ],
  template: `
  <div class="main-container">
    <div [ngClass]="theme">
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class BootstrapComponent {
  title = 'angular-ui-kit';
  theme = "light-theme";
}
