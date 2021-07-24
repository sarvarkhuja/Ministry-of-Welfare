import { EndpointSettings } from 'src/app/core/configs/endpoint.settings';
import { SettingsHelper } from './../helpers/settings.helper';

/**
 * Settings for NgxUILoader(spinner)
 */
export class LoaderSettings {
  /**
   * Excluded URLs for snipper.
   * For these URLs loading indicator will not be shown
   */
  public static readonly EXCLUDED_URL = [
    `^.*${EndpointSettings.SIGN_IN}`,
    `^.*${EndpointSettings.GET_EMPLOYEES_LIST}`,
  ];

  /**
   * Combines base endpoint url and incoming url
   * @param url URL
   * @returns `string`
   */
  private static getFullUrl(url: string): string {
    return SettingsHelper.settings.endpoint + url;
  }
}
