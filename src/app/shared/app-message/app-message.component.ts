import { Component, OnInit } from '@angular/core';
import { messageState } from '../types';
import { AppMessageService } from './app-message.service';
import { Message } from './message.model';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-message',
  templateUrl: './app-message.component.html',
  styleUrls: ['./app-message.component.scss'],
  animations: [
    trigger('fadeIn', [
      // ...
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('out => in', [
        animate('1s')
      ]),
      transition('in => out', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppMessageComponent implements OnInit {

  fadeIn: string = 'out';
  constructor( private messageService: AppMessageService ) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      if ( message != null ) {
        this.fadeIn = 'in';
      }else { 
        this.fadeIn = 'out';
      }
      
    });
  }

  get message$(): Subject<Message> {
    return this.messageService.getMessage();
  }



}
