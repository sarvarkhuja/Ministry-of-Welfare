import { SettingsHelper } from './settings.helper';

/**
 * Class to manipulate urls
 * Contains static functions
 */
export class UrlHelper {
  /**
   * Combines base url with `url` and returns combination
   * @param url After domain address
   */
  static fullUrl(url: string): string {
    return SettingsHelper.settings.endpoint + url;
  }
}
