/**
 *
 */
 export class StringHelper {
/**
 *
 * @param firstValue value which is checked for equality
 * @param secondValue value to which the first parameter is compared to; 'true' by default
 * @returns true if the first value is equal to the second one; false otherwise
 */
    static toBool = (firstValue: string, secondValue = 'true') => firstValue === secondValue;
 }
