import { DatepickerOptions } from './../configs/datepicker-options';
import { DecoratorMetadata } from './decorator.metadata';
import 'reflect-metadata';

/**
 *
 */
export function Datetimepicker(value: DatepickerOptions): (target: object, key: string) => void {
  return (target: object, key: string): void => {
    if (!target) {
      return;
    }

    let val: object = Object.entries(target).find((s) => s[0] === key)?.[1];

    Reflect.defineMetadata(DecoratorMetadata.DATEPICKER, value, target, key);
    const getter = () => {
      return val;
    };
    const setter = (next: object) => {
      val = next;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
