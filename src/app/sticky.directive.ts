import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';
import { WindowService } from './window.service';

@Directive({
  selector: '[sticky]'
})
export class StickyDirective {
  window: any;
  renderer: Renderer;
  el: ElementRef;
  elClone: any;

  constructor(el: ElementRef, renderer: Renderer, windowService: WindowService) {
    this.window = windowService.nativeWindow;
    this.renderer = renderer;
    this.el = el;
    this.elClone = null;
  }

  @HostListener('window:scroll') onScroll() {
    this.stick();
  }

  stick(){

    if(this.window.scrollY > 0 && !this.elClone){
      this.elClone = this.window.document.createElement('div');
      this.elClone.style.height = this.el.nativeElement.offsetHeight + 'px';
      this.elClone = this.el.nativeElement.parentElement.insertBefore(this.elClone, this.el.nativeElement);
      this.renderer.setElementClass(this.el.nativeElement, 'volume-sticky', true);
    }else if(this.window.scrollY === 0 && this.elClone){
      this.elClone.remove();
      this.elClone = null;
      this.renderer.setElementClass(this.el.nativeElement, 'volume-sticky', false);
    }

  }
}
