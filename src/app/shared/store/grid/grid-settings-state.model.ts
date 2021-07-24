import { ColumnSetting } from './../../../core/configs/column-settings';
/**
 *
 */
export interface GridSettingsStateModel {
  /**
   *
   */
  [key: string]: ColumnSetting[];
}

/**
 *
 */
export interface GridStoreModel {
  /**
   *
   */
  order: number;
}
