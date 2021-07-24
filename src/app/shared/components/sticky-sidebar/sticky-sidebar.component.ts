import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export type StickySection = { name: string; isRequired: boolean };

@Component({
  selector: 'sticky-sidebar',
  templateUrl: './sticky-sidebar.component.html',
  styleUrls: ['./sticky-sidebar.component.scss'],
})
export class StickySidebarComponent {
  /**
   *
   */
  @Input()
  sections!: StickySection[];

  private _currentSection = '';

  get currentSection(): string {
    if (this._currentSection) {
      return this._currentSection;
    }
    return this.sections && this.sections?.length > 0 ? this.sections[0].name : '';
  }

  set currentSection(value: string) {
    this._currentSection = value;
  }

  constructor() {}

  /**
   *
   */
  public scrollTo(anchor: string): void {
    this.currentSection = anchor;
    document.getElementById(anchor)?.scrollIntoView();
  }

  /**
   *
   */
  public sectionChanged(section: string): void {
    this.currentSection = section;
  }
}
