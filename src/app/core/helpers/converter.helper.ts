/**
 *
 */
export class ConverterHelper {
  /**
   *
   * @param data string value to be converted
   */
  static atob(data: string): string {
    if (!data) {
      return data;
    }
    return decodeURIComponent(escape(atob(data)));
  }

  /**
   *
   * @param data string value to convert
   */
  static btoa(data: string): string {
    if (!data) {
      return data;
    }
    return btoa(unescape(encodeURIComponent(String(data))));
  }
}
