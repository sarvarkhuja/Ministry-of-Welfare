import { Component, OnInit, ElementRef, ViewChild, Renderer2, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetUiSetting } from 'src/app/shared/store/configurations/user-info/user-info.action';
import { UserInfoState } from 'src/app/shared/store/configurations/user-info/user-info.state';
import { DOCUMENT } from '@angular/common';
import DxThemes from 'devextreme/ui/themes';

@Component({
  selector: 'footer-element',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  /**
   * List of themes to be displayed in the select-box
   */
  themes = [
    { name: 'Custom', value: 'material.custom.blue' },
    { name: 'Light', value: 'generic.light' },
    { name: 'Dark Moon', value: 'generic.darkmoon' },
    { name: 'Blue Light', value: 'material.blue.light' },
    { name: 'Orange Light', value: 'material.orange.light' },
    { name: 'Blue Light Compact', value: 'material.blue.light.compact' },
    { name: 'Teal Light Compact', value: 'material.teal.light.compact' },
  ];

  /**
   * Default theme chosen in the select box
   */
  theme!: string;

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

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer2, private store: Store) {}

  ngOnInit(): void {
    this.theme = this.themes[0].value;
    this.onValueChange(this.uiSettings?.fontSize || 0);
  }

  /**
   * Show / hide the font information popup
   */
  title = (value: number) => {
    return this.numbers[value];
  };

  onValueChange(value: number): void {
    this.store.dispatch(new SetUiSetting({ fontSize: value }));
    this.renderer.setAttribute(this.document.documentElement, 'data-font', this.numbers[value]);
  }

  toggleFontInfo(): void {
    this.changeFontBoolean = !this.changeFontBoolean;
  }

  /**
   * Called when theme is changed in select box
   * @param event event emitted on theme value change
   */
  onThemeValueChanged(event: any): void {
    DxThemes.current(event.value);
  }
}
