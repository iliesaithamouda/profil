import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-progressive-bar',
  templateUrl: './progressive-bar.component.html',
  styleUrls: ['./progressive-bar.component.scss'],
  animations: [
    trigger('animateProgress', [
      // ...
      state('empty', style({
        width: '0%'
      })),
      state('full', style({
        width: '{{test}}%'
      }), {params : { test : 0}}),
      transition('empty => full', [
        animate('2s')
      ])
    ])
  ]
})
export class ProgressiveBarComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  progress: number = 75;

  private animate: string = 'empty';
  progressRate: number = 0;

  constructor() { }

  ngOnInit() {
    window.setTimeout(() => { this.animate = 'full'; this.updateProgressPercentage() }, 2000);
  }

  updateProgressPercentage() {
    const progressRateTimer =  2000 / this.progress;
    const progressRateInterval = setInterval(() => { 
      if ( this.progress === this.progressRate) {
        clearInterval(progressRateInterval);
      } else {
        this.progressRate += 1;
      }
    }, progressRateTimer);
  }

}
