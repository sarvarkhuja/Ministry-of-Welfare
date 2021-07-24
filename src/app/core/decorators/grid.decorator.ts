import { DecoratorMetadata } from './decorator.metadata';
/**
 * Decorator marks Grid's name.
 * Used on top of class
 * @param name Name
 */
export function Grid<T>(name: string): (target: T) => void {
  return (target: T): void => {
    Reflect.defineMetadata(DecoratorMetadata.GRID_ANNOTATION, name, target);
  };
}
