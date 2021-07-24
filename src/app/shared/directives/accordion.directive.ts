import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[accordion]',
})
export class AccordionDirective {
  /**
   *
   */
  element!: HTMLElement;

  /**
   *
   */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  /**
   *
   */
  @HostListener('click')
  clicked(): void {
    this.element.classList.toggle('-hidden');
    this.element.parentElement?.nextElementSibling?.classList.toggle('-hidden');
  }
}
