import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[scrollableBackgroundImage]'
})
export class ScrollBackgroundDirective {

  
  constructor(private el : ElementRef, private renderer: Renderer2) { 
  }

  @HostListener('window:scroll')
  onScroll() {
    var element : any = this.el.nativeElement; //document.getElementsByClassName('background-pic-m')[0];
    var backgroundTop = element.scrollTop;
    var backgroundHeight = element.clientHeight;
    var top = window.scrollY;

    var yPos = ((top - backgroundTop))/2;

    if ( yPos <= backgroundHeight + backgroundTop ) {
      //element.style.backgroundPosition = '50% ' + yPos + 'px';
      this.renderer.setStyle(element, 'background-position', '50% ' + yPos + 'px');
    }
  }

}
