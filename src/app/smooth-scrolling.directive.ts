import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScrolling]'
})
export class SmoothScrollingDirective {

  @HostListener('click')
  onclick() {
    let id: string = this.el.nativeElement.dataset.targetLink;

    if (!id) {
      let attributes = this.el.nativeElement.attributes;
      id = attributes.name ? attributes.name.value : attributes.title.value;
    }
    let elementToScrollTo = document.getElementById(id);
    elementToScrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  constructor(private el: ElementRef) { }

}
