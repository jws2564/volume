import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[sticky]'
})
export class StickyDirective {

  //TODO need a service to get the window object
  constructor(el: ElementRef, renderer: Renderer) { }

  @HostListener('scroll', ['$event']) onScroll(event: any) {
    this.stick(event);
  }

  stick(event: any){
    //TODO use renderer object to set a class? --next
    console.log(event);
  }

}
