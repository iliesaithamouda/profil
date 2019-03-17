import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnscroll]'
})
export class OnscrollDirective {

  private padding: number = 20;

  @HostListener('window:scroll', ['$event'])
  onscroll(event: any) {
    this.changeMenuHeight();
    this.changeMenuClass();
  }
  constructor( private el: ElementRef, private renderer: Renderer2) {
  }

  changeMenuHeight(): void {
    if (window.scrollY > 200 && this.padding > 0) {
      this.padding -= 1;
      this.renderer.setStyle(this.el.nativeElement, 'padding-top', this.padding + 'px');
    } else if (window.scrollY < 200 && this.padding < 20) {
      this.padding += 2;
      this.renderer.setStyle(this.el.nativeElement, 'padding-top', this.padding + 'px');
    }
  }

  changeMenuClass(): void {
    if (window.scrollY > 100) {
      this.renderer.addClass(this.el.nativeElement, 'stickyMenu');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'stickyMenu');
    }
  }

}
