import { ControlType } from './../enums/control-type.enum';
import { DecoratorMetadata } from './decorator.metadata';

export const controlsMap: Map<string, ControlType> = new Map([
  [DecoratorMetadata.CUSTOM, ControlType.CUSTOM],
  [DecoratorMetadata.DROPDOWN, ControlType.DROPDOWN],
  [DecoratorMetadata.DATEPICKER, ControlType.DATEPICKER],
  [DecoratorMetadata.TIMEPICKER, ControlType.TIMEPICKER],
]);
