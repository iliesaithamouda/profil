import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Can also be included with a regular script tag
    var options = {
      strings: ["A human being", "A Husband","A Father","A code lover","Oh and a Developer :)"],
      loop: false,
      backSpeed: 1,
      typeSpeed: 100,
      smartBackspace: true,
      startDelay: 0,
    }
    var typed = new Typed(".introduction-phrase", options);
    
  }

}
