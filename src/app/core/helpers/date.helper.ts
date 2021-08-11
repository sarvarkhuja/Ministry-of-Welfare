import * as moment from 'moment';

/**
 *
 */
export class DateHelper {
  /**
   * Default date format
   */
  public static readonly DATE_FORMAT = 'dd/MM/yyyy';

  /**
   *  Default date format when moment.js is used
   */
  public static readonly DATE_FORMAT_MOMENT = 'MM/DD/YYYY';

  /**
   *
   * @param date value that needs to be recalculated
   */
  static calculateWithoutTimeOffset(date: any): Date {
    const userTimezoneOffset = date?.getTimezoneOffset() * 60000;
    return new Date(date?.getTime() - userTimezoneOffset);
  }

  /**
   *
   */
  static toDate = (date: string | Date | undefined) => (date ? DateHelper.formatDate(date) : null);

  /**
   * Subtracts specified amount from time unit
   * @param amount amount that should be subtracted
   * @param timeUnit unit from what amount shoud be subtracted (years, months, days, etc.)
   * @returns changed date
   */
  static subtractTimeUnitFromDate = (
    amount: moment.DurationInputArg1,
    timeUnit: moment.unitOfTime.DurationConstructor = 'years'
  ) => moment(new Date()).subtract(amount, timeUnit).toDate();

  /**
   * Formats date to the specified format
   * @param date date to format
   * @param format format to which the date should be changed
   * @returns formatted date
   */
  static formatDate = (date: string | Date, format = DateHelper.DATE_FORMAT_MOMENT) =>
    new Date(moment(date).format(format));
}
