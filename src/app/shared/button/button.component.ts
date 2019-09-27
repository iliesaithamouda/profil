import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  size: 'lg' | 'md' | 'sm' = 'md';

  @Input()
  disabled: boolean = false;

  @Output()
  private clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  buttonClicked() {
    this.clicked.emit(true);
  }

  ngOnInit() {
  }

}
