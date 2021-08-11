import { DecoratorMetadata } from './decorator.metadata';
import { ColumnSetting } from '../configs/column-settings';
import { DisplayParam } from '../models/types/display-param.model';
import 'reflect-metadata';

/**
 * Describes column settings for grid.
 * Used on top of class property.
 */
export function Display(value: DisplayParam): (target: object, key: string) => void {
  return (target: object, key: string): void => {
    if (!target) {
      return;
    }

    let val: object = Object.entries(target).find((s) => s[0] === key)?.[1];
    const columnSettings: ColumnSetting = {
      allowEditing: value.allowEditing,
      allowFiltering: value.allowFiltering,
      allowHiding: value.allowHiding,
      allowReodering: value.allowReodering,
      allowResizing: value.allowResizing,
      allowSearch: value.allowSearch,
      caption: value.caption ?? `${target.constructor.name.toLowerCase()}.${key}`,
      captionInEnglish: value.captionInEnglish ?? `${target.constructor.name.toLowerCase()}.${key}`,
      cssClass: value.cssClass,
      dataField: key,
      dataType: value.dataType,
      format: value.format,
      minWidth: value.minWidth,
      showInColumnChooser: value.showInColumnChooser,
      validationRules: value.validationRules,
      visible: value.visible,
      width: value.width
    };

    Reflect.defineMetadata(DecoratorMetadata.DISPLAY_ANNOTATION, columnSettings, target, key);
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
