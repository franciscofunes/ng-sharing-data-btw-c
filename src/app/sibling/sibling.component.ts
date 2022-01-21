import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <div class="container">
      <h1>Sibling</h1>
      <button (click)="newMessage()" class="button">Say hello to child</button>
    </div>
  `,
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent {
  constructor(private data: DataService) {}

  messageFromSiblingToChild: string = '';

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.messageFromSiblingToChild = message)
    );
  }

  newMessage() {
    this.data.changeMessage('Hello from sibling to child');
  }
}
