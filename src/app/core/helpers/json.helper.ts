/**
 * Helper to work with json
 */
export class JsonHelper {
  /**
   * Converts PascalCased object to camelCase
   * @param data Data to be camel cased
   */
  static toCamel(data: any): any {
    if (data) {
      if (data instanceof Array) {
        return data.map((el) => (typeof el === 'object' ? this.toCamel(el) : el));
      } else {
        const newInst: { [key: string]: object } = {};
        Object.keys(data).forEach((key) => {
          if (data.hasOwnProperty(key)) {
            const newKey = key.charAt(0).toLowerCase() + key.slice(1) || key;
            let value = data[key];
            if (value instanceof Array || (value && value.constructor === Object)) {
              value = this.toCamel(value);
            }
            newInst[newKey] = value;
          }
        });
        return newInst;
      }
    }
  }
}
