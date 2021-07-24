import { DropdownOptions } from './../configs/dropdown-options';
import { DecoratorMetadata } from './decorator.metadata';
import 'reflect-metadata';

/**
 * Decorates a field with DropdownOptions metadata
 */
export function Dropdown(value: DropdownOptions): (target: object, key: string) => void {
  return (target: object, key: string): void => {
    if (!target) {
      return;
    }

    let val: object = Object.entries(target).find((s) => s[0] === key)?.[1];

    Reflect.defineMetadata(DecoratorMetadata.DROPDOWN, value, target, key);
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
