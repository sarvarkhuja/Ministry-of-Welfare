import { LocalizationService } from './../../localization.service';
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';

/**
 * Extended custom MessageService of Kendo UI
 * @description https://blog.mozilla.org/l10n/2011/12/14/i18n-vs-l10n-whats-the-diff/
 * @description The terms are frequently abbreviated to the numeronyms i18n
 * where 18 stands for the number of letters between the first i and the last n in the word internationalization,
 * and L10n for localization, due to the length of the words.
 *  Some writers have the latter acronym capitalized to help distinguish the two.
 */
@Injectable({
  providedIn: 'root',
})
export class L10nMessageService extends MessageService {
  /**
   * Constructor
   * @param $l10n Localization service
   */
  constructor(private $l10n: LocalizationService) {
    super();
  }

  /**
   * Gets translation of kendo controls by the `key`.
   * If translation not found default translation is used in controls
   * @param key Translation key to get kendo control's translation.
   * @returns `string | undefined`
   */
  public get(key: string): string | undefined {
    if (Object.keys(this.$l10n.loadedLocalesJson).length === 0 || !this.$l10n.loadedLocalesJson) {
      return undefined;
    }
    /// converts '.' (dot) based string to object style i.e kendo.grid.filter = json[kendo][grid][filter]
    const trans = key.split('.').reduce((p, c) => (p && p[c]) || null, this.$l10n.loadedLocalesJson);
    return trans;
  }
}
