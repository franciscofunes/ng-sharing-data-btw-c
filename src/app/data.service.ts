import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Create a BehaviorSubject to share data between components
  // Benefits every component consuming the service receives the most recent up to date data

  // in the service we create a behavior subject that will hold the current value of the message
  private messageSource = new BehaviorSubject<string>('');

  // we create a currentMessage variable set to as an observable that will be used by the components
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  // create a function that calls next on the behavior subject to change it current value
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
