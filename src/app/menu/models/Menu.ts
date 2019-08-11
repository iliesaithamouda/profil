import { MenuItem } from './menu-item';

export class Menu {
    items = new Array<MenuItem>();
    constructor(){
        this.items.push({label: 'Home', link: '/home', selected: true});
        this.items.push({label: 'About', link: '/about', selected: false});
        this.items.push({label: 'Services', link: '/services', selected: false});
        //this.items.push({label: 'Work', link: '/work', selected: false});
        this.items.push({label: 'Posts', link: '/posts', selected: false});
        this.items.push({label: 'Contact', link: '/contact', selected: false});
    }
}
