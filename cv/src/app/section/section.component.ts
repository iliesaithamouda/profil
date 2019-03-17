import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  backgroundColorClass: string;

  @Input()
  sectionType: string;

  constructor() { }

  ngOnInit() {
  }

}
