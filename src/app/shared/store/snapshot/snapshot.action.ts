import { GridResult } from './../../../core/configs/grid-result';
import { Observable } from 'rxjs';

export class SaveGridData {
  public static type = '[SaveGridData] Save grid data';

  /**
   *
   */
  constructor(public data: GridResult, public tableName: string) {}
}
