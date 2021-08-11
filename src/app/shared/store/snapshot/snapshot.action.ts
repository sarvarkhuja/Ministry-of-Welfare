import { GridResult } from './../../../core/configs/grid-result';

export class SaveGridData {
  public static type = '[SaveGridData] Save grid data';

  /**
   *
   */
  constructor(public data: GridResult, public tableName: string) {}
}
