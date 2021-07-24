/**
 * Model for describing column's settings for a grid.
 * Used for grid in Display decorator to describe a single column
 */
export interface ColumnSetting {
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
  dataType: ColumnType;
  format?: string;
  minWidth?: number;
  validationRules?: any[];
  visible?: boolean;
  width?: number;
}

/**
 * Column type if grid is editable.
 * Filters in grid is configured by this type
 */
export type ColumnType = 'string' | 'numeric' | 'boolean' | 'date';
