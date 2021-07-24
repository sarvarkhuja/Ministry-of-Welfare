import { Observable } from 'rxjs';
import { GridResult } from 'src/app/core/configs/grid-result';
import { ColumnSetting } from './../../../core/configs/column-settings';
/**
 *
 */
export class SetGridSettings {
  /**
   *
   */
  static readonly type = '[GridSettings] Set GridSettings';

  /**
   *
   */
  constructor(public payload: { key: string; value: ColumnSetting[] }) {}
}

/**
 *
 */
export class SetColumnOrder {
  /**
   *
   */
  static readonly type = '[GridSettings] Set Column order';

  /**
   *
   */
  constructor(public payload: { key: string; value: ColumnSetting }) {}
}
