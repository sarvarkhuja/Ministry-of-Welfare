import { DecoratorMetadata } from './decorator.metadata';
import 'reflect-metadata';

/**
 * Decorator is used to define primary key field
 */
export function PrimaryKey(): (target: object, key: string) => void {
  return (target: object, key: string): void => {
    if (!target) {
      return;
    }

    Reflect.defineMetadata(DecoratorMetadata.PRIMARY_KEY, true, target, key);
  };
}
