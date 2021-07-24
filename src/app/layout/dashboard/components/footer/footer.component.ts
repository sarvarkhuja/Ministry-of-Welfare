
import { Component, OnInit, ElementRef, HostListener, ViewChild, Renderer2, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SystemService } from 'src/app/core/services/system/system/system.service';
import { SetUiSetting } from 'src/app/shared/store/configurations/user-info/user-info.action';
import { UserInfoState } from 'src/app/shared/store/configurations/user-info/user-info.state';
import { DOCUMENT } from '@angular/common';
import DxThemes from 'devextreme/ui/themes';

@Component({
  selector: 'footer-element',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  themes = [
        { name: 'Blue light', value: 'material.blue.light' },
        { name: 'Blue dark', value: 'material.blue.dark' },
        { name: 'Teal light', value: 'material.teal.light' },
        { name: 'Teal dark', value: 'material.teal.dark' },
        { name: 'Orange light', value: 'material.orange.light'},
        { name: 'Orange dark', value: 'material.orange.dark' },
  ];
  version$!: Observable<string>;
  /**
   *
   */
  changeFontBoolean!: boolean;

  uiSettings = this.store.selectSnapshot(UserInfoState.uiSettings);

  value = 0;

  numbers = ['normal', 'big', 'large'];

  /**
   * Reference to popup template
   */
  @ViewChild('fontPopup')
  fontPopup!: ElementRef;



  constructor(
    private $system: SystemService,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private store: Store
    ) {
  }

  ngOnInit(): void {
    this.onValueChange(this.uiSettings?.fontSize || 0);
  }

  /**
   * Show / hide the font information popup
   */
  title = (value: number) => {
    return this.numbers[value];
  }

  onValueChange(value: number): void {
    this.store.dispatch(new SetUiSetting({ fontSize: value }));
    this.renderer.setAttribute(this.document.documentElement, 'data-font', this.numbers[value]);
  }

  toggleFontInfo(): void {
    this.changeFontBoolean = !this.changeFontBoolean;
  }
  onValueChanged(e: any): void {
    DxThemes.current(e.value);
  }
}
