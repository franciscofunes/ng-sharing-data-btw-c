import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      <h1>Parent</h1>
      <p><strong>Message:</strong> {{ messageFromChildToParent }}</p>
      <p><strong>Message:</strong> {{ messageFromChildToParentViewChild }}</p>
      <app-child
        [messageFromParentToChild]="message"
        (messageEventFromChildToParentEvent)="receiveMessageFromChild($event)"
      ></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child: any;
  constructor() {}

  message: string = 'Hello from parent';

  messageFromChildToParent: string = 'waiting you to click the button';

  messageFromChildToParentViewChild: string = '';

  ngAfterViewInit() {
    this.messageFromChildToParentViewChild =
      this.child.messageFromChildToParentViewChild;
  }

  // Create a function to receive the message from child
  receiveMessageFromChild($event: string) {
    this.messageFromChildToParent = $event;
  }
}
