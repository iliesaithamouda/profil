import { Directive, ElementRef, HostListener, Renderer2, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[toto]'
})
export class ScrollBackgroundDirective implements OnInit, OnDestroy {

  /*@HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log('scrolllll');
    this.handleScroll(null);
  }*/
  constructor(private el : ElementRef, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef ) { 
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

   handleScroll(event: any) {
     
      var element : any = document.getElementsByClassName('background-pic-m')[0];
      var backgroundTop = element.scrollTop;
      var backgroundHeight = element.clientHeight;
      var top = window.scrollY;

      var yPos = ((top - backgroundTop))/2;

      if ( yPos <= backgroundHeight + backgroundTop ) {
        element.style.backgroundPosition = '50% ' + yPos + 'px';
      }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll',this.handleScroll, true);
  }

}
