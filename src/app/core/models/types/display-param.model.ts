import { ColumnType } from 'src/app/core/configs/column-settings';

export interface DisplayParam {
  allowEditing?: boolean;
  allowFiltering?: boolean,
  allowHiding?: boolean;
  allowReodering?: boolean;
  allowResizing?: boolean;
  allowSearch?: boolean;
  caption?: string;
  captionInEnglish?: string;
  cssClass?: string;
  dataField?: string;
  dataType: ColumnType
  format?: string;
  minWidth?: number;
  showInColumnChooser?: boolean;
  validationRules?: any[];
  visible?: boolean;
  width?: number;
}
