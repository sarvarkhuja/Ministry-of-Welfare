import { Storage } from '@core/helpers/storage.helper';
import { LANGUAGE, LANGUAGES } from './../configs/language.settings';

export class LanguageHelper {
  /**
   * Gets the current language of the app
   * If null, sets Hebrew by default
   * @returns the current language value (HEBREW or ENGLISH)
   */
  public static getCurrentLanguage(): string {
    const currentLanguage = Storage.getLocal(LANGUAGE);

    if (!currentLanguage) {
      Storage.setLocal(LANGUAGE, LANGUAGES[0].value);
      return LANGUAGES[0].value;
    }

    return currentLanguage;
  }

  /**
   *
   * @returns true if Hebrew, false if English
   */
  public static isHebrew(): boolean {
    const currentLanguage = Storage.getLocal(LANGUAGE);

    return currentLanguage === LANGUAGES[0].value;
  }
}
