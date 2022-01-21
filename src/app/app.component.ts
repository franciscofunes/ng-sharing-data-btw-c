import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-parent></app-parent> <app-sibling></app-sibling> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sharing-data-btw-c';
}
