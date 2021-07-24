/**
 *
 */
export class DateHelper {
  /**
   * Default date format
   */
  public static readonly DATE_FORMAT = 'dd/MM/yyyy';

  /**
   *
   * @param date value that needs to be recalculated
   */
  static calculateWithoutTimeOffset(date: any): Date {
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
  }

  /**
   *
   */
  static toDate = (date: string | Date | undefined) => date ? new Date(date) : null;

}
