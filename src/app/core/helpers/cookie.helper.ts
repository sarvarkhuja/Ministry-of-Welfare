/**
 * Helper to work with cookies
 */
export class CookieHelper {

  /**
   * Stores cookie(s) to browser's cookie storage
   * @param cookiesString Cookie associated string
   */
  static setFromString(cookiesString: string): void {
    document.cookie = cookiesString;
  }

}

