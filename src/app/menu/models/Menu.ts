export class Menu {
    items = new Array<{label: String, link: String}>();
    constructor(){
        this.items.push({label: 'Home', link: '/home'});
        this.items.push({label: 'About', link: '/about'});
        this.items.push({label: 'Services', link: '/services'});
        this.items.push({label: 'Work', link: '/work'});
        this.items.push({label: 'Posts', link: '/posts'});
        this.items.push({label: 'Contact', link: '/contact'});
    }
}
