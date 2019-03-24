import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScrolling]'
})
export class SmoothScrollingDirective {

  @HostListener('click')
  onclick() {
    let id: string = this.el.nativeElement.attributes.name ? this.el.nativeElement.attributes.name.value : this.el.nativeElement.attributes.title.value;
    let elementToScrollTo = document.getElementById(id);
    elementToScrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  constructor(private el: ElementRef) { }

}
