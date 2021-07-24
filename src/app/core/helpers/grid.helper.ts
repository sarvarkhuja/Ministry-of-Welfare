// import { Store } from '@ngxs/store';
// import { InjectorHelper } from './injector.helper';
// import { Observable } from 'rxjs';
// import { controlsMap } from './../decorators/utils';
// import { ControlType } from './../enums/control-type.enum';
// import { ColumnSetting } from './../configs/column-settings';
// import { DecoratorMetadata } from './../decorators/decorator.metadata';
// import {
//   ColumnReorderEvent,
//   ColumnComponent,
//   ColumnResizeArgs,
//   ColumnVisibilityChangeEvent,
//   GridDataResult,
// } from '@progress/kendo-angular-grid';
// import { tap } from 'rxjs/operators';
// import { SaveGridData } from 'src/app/shared/store/snapshot/snapshot.action';

// /**
//  * Helper for grid usage. Includes necessary functions to serve grid
//  */
// export class GridHelper {

//   public static PAGE_SIZES: number[] = [10, 20, 40, 70, 100];

//   /**
//    * Defines name of the grid by accessing to given type and its Grid decorator
//    * @param type Grid model to show in grid
//    * @returns `string`
//    */
//   static nameOf(type: object): string {
//     if (!Reflect.hasOwnMetadata(DecoratorMetadata.GRID_ANNOTATION, type.constructor)) {
//       return type.constructor.name;
//     }
//     const gridName = Reflect.getMetadata(DecoratorMetadata.GRID_ANNOTATION, type.constructor);
//     return gridName;
//   }

//   /**
//    * Applies reordering for given columns
//    * @param columnOrder Ordered column event
//    * @param columns All columns grid contains
//    */
//   static reorderColumn(columnOrder: ColumnReorderEvent, columns: ColumnSetting[]): void {
//     const columnComponent: ColumnComponent = columnOrder.column as ColumnComponent;

//     columns.forEach((column) => {
//       if (column.order < columnOrder.oldIndex && column.order >= columnOrder.newIndex) {
//         column.order++;
//       } else if (column.order > columnOrder.oldIndex && column.order <= columnOrder.newIndex) {
//         column.order--;
//       }
//       if (column.field === columnComponent.field) {
//         column.order = columnOrder.newIndex;
//       }
//     });
//   }

//   /**
//    * Applies resized columns
//    * @param resizeArgs Resized columns and arguments
//    * @param columnsSetting Actual columns settings
//    */
//   static resizeColumn(resizeArgs: Array<ColumnResizeArgs>, columnsSetting: ColumnSetting[]): void {
//     resizeArgs.forEach((resizeArg) => {
//       const columnComponent: ColumnComponent = resizeArg.column as ColumnComponent;
//       const column = columnsSetting.find((col) => col.field === columnComponent.field);
//       if (column) {
//         column.width = resizeArg.newWidth || column.width;
//       }
//     });
//   }

//   /**
//    * Applies visibility changes in a grid
//    * @param event Visibility settings stored property
//    * @param columnsSettings Actual columns settings
//    */
//   static shiftColumnsVisibity(event: ColumnVisibilityChangeEvent, columnsSettings: ColumnSetting[]): void {
//     event.columns.forEach((columnBase) => {
//       const columnComponent: ColumnComponent = columnBase as ColumnComponent;
//       const column = columnsSettings.find((col) => col.field === columnComponent.field);
//       if (column) {
//         column.isHidden = columnComponent.hidden;
//       }
//     });
//   }

//   /**
//    * Retreives type of the `field` in `prototype` using specified decorators
//    * @param prototype Prototype of given object
//    * @param field Name of the field in a column
//    */
//   static typeOfControl(prototype: object, field: string): ControlType {
//     const decorators = Reflect.getOwnMetadataKeys(prototype, field);
//     let controlType = ControlType.NONE;
//     controlsMap.forEach((value: any, key: any) => {
//       if (decorators.find((name) => key === name)) {
//         controlType = value;
//       }
//     });
//     return controlType;
//   }

//   /**
//    * Gets metadata options from `field` in given `prototype`
//    * @param prototype Prototype of given object
//    * @param field Name of the field in a column
//    */
//   static optionsOfColumnControl(prototype: object, field: string): { options: any; type: ControlType } | null {
//     const decorators = Reflect.getOwnMetadataKeys(prototype, field);

//     let metadataKey;
//     let type = ControlType.NONE;
//     controlsMap.forEach((value: any, key: any) => {
//       if (decorators.find((name) => key === name)) {
//         metadataKey = key;
//         type = value;
//       }
//     });

//     if (!metadataKey && !type) {
//       return null;
//     }

//     const options = Reflect.getOwnMetadata(metadataKey, prototype, field);
//     return { options, type };
//   }

//   /**
//    *
//    * @param value grid data
//    * @param columns column settings
//    */
//   static mapGridDates(value: Observable<GridDataResult>, columns: ColumnSetting[]): Observable<GridDataResult> {
//     return value.pipe(
//       tap((p) => {
//         p.data.forEach((s) => {
//           Object.keys(s).map((key) => {
//             const column = columns.find((w) => w.field === key && w.type === 'date');
//             if (column) {
//               s[key] = new Date(s[key]);
//             }
//           });
//         });
//       })
//     );
//   }
// }
