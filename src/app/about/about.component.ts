import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

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
     // Can also be included with a regular script tag
     var options = {
      strings: ["a human being", "a Husband","a Father","a code lover","a passionate Developer", "Ilyes Ait Hamouda :)"],
      loop: false,
      backSpeed: 1,
      typeSpeed: 100,
      smartBackspace: true,
      startDelay: 0,
    }
    var typed = new Typed(".identity", options);
  }

}
