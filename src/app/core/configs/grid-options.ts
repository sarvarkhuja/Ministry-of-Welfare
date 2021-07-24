/**
 * Options for grid to configure grid behavior
 */
export class GridOptions {
  /**
   * Defines whether grid can be edited
   */
  isEditable?: boolean;

  /**
   * Defines whether excel button is shown on grid toolbar
   */
  isExportable?: boolean;

  /**
   * Defines whether add button is shown on grid toolbar
   */
  isAddable?: boolean;

  /**
   * Defines whether reload button is shown on grid toolbar
   */
  isReloadable?: boolean;

  /**
   * Defines whether delete button is shown on grid toolbar
   * and whether a checkbox selection column is added at the beginning of a grid;
   * used to select specific rows and delete them on button click
   */
  isDeletable?: boolean;

  /**
   * Defines whether undo button is shown on grid toolbar
   */
  isUndoable?: boolean;

  /**
   * Defines whether save button is shown on grid toolbar;
   * hidden for some grids where data is saved when clicks out of an editing cell
   */
  showSaveButton?: boolean;

  /**
   * Defines whether a new column with edit buttons is added at the beginning of a grid
   */
  showEditButton?: boolean;

  /**
   * Defines whether delete button is shown on grid toolbar;
   * hidden for some grids where icon should appear only when at least one row is selected
   */
  showDeleteButton?: boolean;

  /**
   * Defines whether more button is shown on grid toolbar;
   */
  showMoreButton?: boolean;

  /**
   * Defines whether pager is shown on grid toolbar;
   */
  showPager?: boolean;

  /**
   * Defines what method is called on plus button click;
   * if true, a new empty row is added to grid for filling
   * if false, onAdd method should be added to *someGridName*.component.ts with the required logic
   */
  insertNewRowOnAddButtonClick?: boolean;

  /**
   * Selects row by specified field
   */
  selectBy?: string;

  /**
   * Show filter menu
   */
  showFilterMenu?: boolean;

  /**
   * Defines toolbar is disable or not
   */
   isDisabledToolbar?: boolean;
}
