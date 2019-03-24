import { Component, OnInit, Input } from '@angular/core';
import { Data } from './data.model';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input()
  layoutType: 'Services' | 'Work';

  data: Data;

  constructor(private portfolioService: PortfolioService) { 
    
  }

  ngOnInit() {
    this.portfolioService.initializeData(this.layoutType);
    this.data = this.portfolioService.getData();
  }

}
