import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification is-primary">
      <h1>Child</h1>
      <p><strong>Message:</strong> {{ messageFromParentToChild }}</p>
      <p>
        <strong>Message:</strong> waiting for you to click the sibling button
      </p>
      <button (click)="sendMessageToParent()" class="button">
        Say hello to your parent
      </button>
    </div>
  `,
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() messageFromParentToChild: string | undefined;

  messageFromChildToParent: string = 'Hello from child';

  messageFromChildToParentViewChild: string =
    'Hello Parent I learn another way to talk to you through view child';

  messageFromSiblingToChild: string = '';

  // Declare a message event variable with the output decorator
  @Output() messageEventFromChildToParentEvent = new EventEmitter<string>();

  // Create a function name that calls the event emitter
  sendMessageToParent() {
    this.messageEventFromChildToParentEvent.emit(this.messageFromChildToParent);
  }

  // inject the data service in the constructor
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.messageFromSiblingToChild = message)
    );
  }

  newMessage() {
    this.data.changeMessage('hello from sibling to child');
  }
}
