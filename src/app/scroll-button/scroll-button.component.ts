import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
  animations: [
    trigger('fadeOut', [
      // ...
      state('start', style({
        top: '5px',
        opacity: 1
      })),
      state('end', style({
        top: '30px',
        opacity: 0.1
      })),
      transition('start => end', [
        animate('1.6s')
      ]),
      transition('end => start', [
        animate('0.1s')
      ]),
    ]),
  ]
})
export class ScrollButtonComponent implements OnInit {

  private animateCounter: number = 0;
  public animateValue: string = 'start';

  @Input()
  scrollToId: string = 'About';

  constructor() { }

  ngOnInit() {
    window.setInterval(() => { this.animateValue = this.animateCounter % 2 === 0 ? 'end' : 'start'; this.animateCounter += 1;}, 2000);
  }

}
