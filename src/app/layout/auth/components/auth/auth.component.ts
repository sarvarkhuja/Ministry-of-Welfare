import { Component, OnInit } from '@angular/core';
import { LANGUAGE, LANGUAGES } from 'src/app/core/configs/language.settings';
import { Storage } from 'src/app/core/helpers/storage.helper';
import { LanguageHelper } from './../../../../core/helpers/language.helper';
import { AuthHelper } from './../../services/auth.helper';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  /**
   * List of languages shown in dropdown
   */
  languages = LANGUAGES;

  /**
   * Currently chosen language
   */
  currentLanguage!: string;

  /**
   *
   */
  ngOnInit(): void {
    AuthHelper.clearAuthRelatedMetadata();
    this.loadLanguage();
  }

  /**
   * Loads the current language (hebrew is set by default)
   */
  loadLanguage = () => (this.currentLanguage = LanguageHelper.getCurrentLanguage());

  /**
   * Called when language is selected in dropdown
   * Changes the current language to the selected option
   * @param event event emitted on language option click
   */
  selectLanguage(event: any): void {
    this.currentLanguage = event.itemData.value;
    Storage.setLocal(LANGUAGE, this.currentLanguage);
  }
}
