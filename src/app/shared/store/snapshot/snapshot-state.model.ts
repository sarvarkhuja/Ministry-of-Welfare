import { Observable } from 'rxjs';
import { GridResult } from '../../../core/configs/grid-result';
export class SnapshotStateModel {
  grid: GridSnapshot[] = [];
}

export interface GridSnapshot {
  name: string;
  data: GridResult;
}
