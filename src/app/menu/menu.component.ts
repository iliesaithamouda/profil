import { Component, OnInit, HostListener } from '@angular/core';
import { Menu } from './models/Menu';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('animateStickyMenu', [
      // ...
      state('block', style({
        paddingTop: '20px',
        backgroundColor: 'transparent',
        borderBottom: '0px solid transparent'
      })),
      state('fixed', style({
        paddingTop: '0px',
        backgroundColor: 'white',
        borderBottom: '1px solid #f0f0f0'
      })),
      transition('block => fixed', [
        animate('0.3s')
      ]),
      transition('fixed => block', [
        animate('0.3s')
      ]),
    ]),
    trigger('animateColorMenu', [
      // ...
      state('block', style({
        color: 'rgb(221, 221, 221)'
      })),
      state('fixed', style({
        color: 'rgb(35, 35, 35)',
        borderBottom: '1px solid #f0f0f0'
      })),
      transition('block => fixed', [
        animate('0.2s')
      ]),
      transition('fixed => block', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class MenuComponent implements OnInit {

  public menu: Menu;
  public menuState: string = 'block'; // 'fixed'
  toggleMenu: boolean = false;


  @HostListener('window:scroll', ['$event'])
  onscroll(event: any) {
    if (this.menuState !== 'fixed' && window.scrollY > 200) {
      this.menuState = 'fixed';
    } else if ( this.menuState !== 'block' && window.scrollY < 200){
      this.menuState = 'block';
    }
  }

  constructor() { 
    this.menu = new Menu();
  }

  ngOnInit() {
  }

  get logoPath(): string {
    return (this.menuState === 'block') ? './assets/logo_v2.png' : './assets/logo_v2_9t.png';
  }

  setMenuItemAsSelected( menuItem: MenuItem) {
    this.menu.items.forEach(element => {
      element.selected = element.label === menuItem.label;
    });
  }

}
