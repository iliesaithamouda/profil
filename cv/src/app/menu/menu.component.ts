import { Component, OnInit } from '@angular/core';
import { Menu } from './models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: Menu;

  constructor() { 
    this.menu = new Menu();
  }

  ngOnInit() {
  }

}
