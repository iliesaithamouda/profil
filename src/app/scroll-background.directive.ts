import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[scrollableBackgroundImage]'
})
export class ScrollBackgroundDirective {

  
  constructor(private el : ElementRef, private renderer: Renderer2) { 
  }

  @HostListener('window:scroll')
  onScroll() {
    this.toggleScrollTopButton();
    var element : any = this.el.nativeElement;
    var backgroundTop = element.scrollTop;
    var backgroundHeight = element.clientHeight;
    var top = window.scrollY;

    var yPos = ((top - backgroundTop))/2;

    if ( yPos <= backgroundHeight + backgroundTop ) {
      this.renderer.setStyle(element, 'background-position', '50% ' + yPos + 'px');
    }
  }

  toggleScrollTopButton() {
    if (window.scrollY > 1000 )
      this.renderer.addClass(document.getElementById('scrollTopButton'), 'show-scroll-top-button');
    else 
      this.renderer.removeClass(document.getElementById('scrollTopButton'), 'show-scroll-top-button');
  }

}
