import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  expertises: Array<{ domain: string; percentage: number }>
  constructor() {
    this.expertises = new Array<{ domain: string; percentage: number }>();
    this.expertises.push({ domain: 'Angular', percentage: 75});
    this.expertises.push({ domain: 'Adobe experience manager', percentage: 60});
    this.expertises.push({ domain: 'Java', percentage: 50});
    this.expertises.push({ domain: 'React', percentage: 10});
  }

  ngOnInit() {
  }

}
