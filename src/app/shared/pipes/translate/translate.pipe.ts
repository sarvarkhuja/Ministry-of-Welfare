import { Pipe, PipeTransform } from '@angular/core';
import { Storage } from '@core/helpers/storage.helper';
import { Language, LANGUAGE } from 'src/app/core/configs/language.settings';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  /**
   * Define text language depending on local storage
   * param currentText hebrew text
   * param newText english text
   * returns 'newText' in dev mode, 'currentText' in prod mode
   */
  transform(currentText: string, newText: string): string {
    const currentLanguage = Storage.getLocal(LANGUAGE);
    return currentLanguage === Language[0] ? currentText : newText;
  }
}
