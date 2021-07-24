import { AuthHelper } from './../../services/auth.helper';
import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/app/core/helpers/storage.helper';
import { LANGUAGE, LANGUAGES } from 'src/app/core/configs/language.settings';
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  /**
   *
   */
  languages = LANGUAGES;

  /**
   *
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
   *
   */
  loadLanguage(): void {
    const currentLanguage = Storage.getLocal(LANGUAGE);
    if (!currentLanguage) {
      Storage.setLocal(LANGUAGE, LANGUAGES[0].value);
      this.currentLanguage = LANGUAGES[0].value;
      return;
    }
    this.currentLanguage = currentLanguage;
  }

  /**
   *
   */
  selectLanguage(languageCode: string): void {
    this.currentLanguage = languageCode;
    Storage.setLocal(LANGUAGE, this.currentLanguage);
  }
}
