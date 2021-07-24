import { ColumnType } from 'src/app/core/configs/column-settings';

export interface TemplateColumn {
  id: number;
  columnName: string;
  englishColumnName?: string;
  field: string;
  orderIndex: number;
  isHidden: boolean;
  width: number;
  isSortedAscendingly?: boolean;
  filter1Value?: any;
  filter1Operator?: any;
  operator?: any;
  filter2Value?: any;
  filter2Operator?: any;

  type: ColumnType;
  format?: string;
}
