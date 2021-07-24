import { DecoratorMetadata } from './decorator.metadata';
import 'reflect-metadata';

/**
 * Decorator is used to pass database column name to back-end while keeping custom name in front-end
 */
export function ColumnName(value: string): (target: object, key: string) => void {
  return (target: object, key: string): void => {
    if (!target) {
      return;
    }

    Reflect.defineMetadata(DecoratorMetadata.COLUMN_NAME, value, target, key);
  };
}
