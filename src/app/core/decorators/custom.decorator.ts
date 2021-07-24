import { DecoratorMetadata } from './decorator.metadata';
import 'reflect-metadata';

/**
 * Decorator used when grid is editable and columns editable input must be customized
 * Used on top of class properties
 */
export function Custom(target: object, key: string): void {
  if (!target) {
    return;
  }

  let val: object = Object.entries(target).find((s) => s[0] === key)?.[1];

  Reflect.defineMetadata(DecoratorMetadata.CUSTOM, true, target, key);
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
}
