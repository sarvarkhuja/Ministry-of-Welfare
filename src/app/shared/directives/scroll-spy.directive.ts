import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[scrollSpy]',
})
export class ScrollSpyDirective {
  /**
   *
   */
  @Input()
  public spiedTags: string[] = [];

  /**
   *
   */
  @Output()
  public sectionChange = new EventEmitter<string>();

  /**
   *
   */
  private currentSection!: string;

  /**
   *
   */
  constructor(private elementRef: ElementRef) {}

  /**
   *
   */
  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    let currentSection;
    const children = this.elementRef.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;

    for (const child of children) {
      if (this.spiedTags.some((spiedTag) => spiedTag === child.tagName)) {
        if (child.offsetTop - parentOffset <= scrollTop) {
          currentSection = child.id;
        }
      }
    }

    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
