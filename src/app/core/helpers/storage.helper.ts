/**
 * Defines functions to access browser's storage.
 * Local storage and session storage
 */
export class Storage {
  /**
   * Gets data from local storage in a browser
   * @param key key
   * @returns `void`|`null`
   */
  static getLocal(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Checks whether data named with given key exists in session storage
   * @param key key
   * @returns `boolean`
   */
  static hasLocal(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  /**
   * Sets `value` naming with `key` to local storage in browser
   * @param key key
   * @param value value
   * @returns `void`
   */
  static setLocal(key: string, value: string): void {
    if (value) {
      localStorage.setItem(key, value);
    }
  }

  /**
   * Removes value fixed to `key` from local storage
   * @param key key
   * @returns `void`
   */
  static removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Gets data from session storage in a browser
   * @param key key
   * @returns `void`|`null`
   */
  static getSession(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  /**
   * Checks whether data named with given key exists in session storage
   * @param key key
   */
  static hasSession(key: string): boolean {
    return !!sessionStorage.getItem(key);
  }

  /**
   * Sets `value` naming with `key` to session storage in browser
   * @param key key
   * @param value value
   * @returns `void`
   */
  static setSession(key: string, value: string): void {
    if (value) {
      sessionStorage.setItem(key, value);
    }
  }

  /**
   * Removes value fixed to `key` from session storage
   * @param key key
   * @returns `void`
   */
  static removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }
}
