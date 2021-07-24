import { SelectItem } from './models/types/select-item.model';
/**
 * Gets domain of the url
 * @param url Incoming url address
 */
export const getDomain = (url: string) => new URL(url).host;

/**
 * Custom type to define it is undefined or null
 */
export type UndefinedNull = undefined | null;

/**
 * Formats `args` using given `template`
 * @param template Template string (i.e {0} | {1})
 * @param args Proper arguments for `template`
 * @returns `string` if template is '{0} | {1}', then returns {args[0]} | {args[1]}
 */
export const format = (template: string, ...args: string[]): string => {
  return template.replace(/\{(\d+)(:[^\}]+)?\}/g, (match, index) => {
    return args[index] || match;
  });
};

/**
 * Converts given `args` to an array.
 * If `args` is an array itself, then just returns it.
 * @param args Input data
 * @returns `T[]`
 */
export function intoArray<T>(args: T | T[]): T[] {
  return Array.isArray(args) ? args : [args];
}

/**
 * Converts given `text` and `value` to SelectItem type
 * @param text Text
 * @param value any object
 * @returns `SelectItem`
 */
export const mapToSelectItem = (text: string, value: any): SelectItem => ({ text, value });

/**
 * Deep clones the values
 * @param source any object
 */
export function deepClone<T>(source: T): T {
  return JSON.parse(JSON.stringify(source));
}

/**
 *
 */
export function combineLookupFields(items: any[]): any {
  return items.map((item) => {
    item.entryNumber = +item.entryNumber;
    if (item.entryNumber && item.description) {
      item.textField = `${item.entryNumber} | ${item.description}`;
    } else {
      item.textField = item.description;
    }
    return item;
  });
}

/**
 *
 * @param code value field of lookup
 * @param description text field of lookup
 */
export const mapToLookupText = (code: string = '', description: string = ''): string =>
  code && description ? `${code} | ${description}` : code || description;

/**
 *
 */
export function calculateWithoutTimeOffset(date: Date): Date | undefined {
  if (!(date instanceof Date)) {
    return undefined;
  }

  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - userTimezoneOffset);
}

/**
 *
 */
export const nameof = <T>(name: Extract<keyof T, string>): string => name;
