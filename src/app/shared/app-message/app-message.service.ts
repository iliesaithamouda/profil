import { Injectable } from '@angular/core';
import { messageState } from '../types';
import { Observable, Subject } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {

  private _message: Subject<Message> = new Subject();
  constructor() { }

  displayMessage(state: messageState, description: string) {
    this._message.next({state: state, description: description});
    setTimeout(() => {
      this._message.next();
    }, 5000);
  }

  getMessage(): Subject<Message> {
    return this._message;
  }
}
