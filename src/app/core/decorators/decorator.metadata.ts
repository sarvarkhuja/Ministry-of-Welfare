/**
 * Describes decorators' unique metadata string
 */
export class DecoratorMetadata {
  /**
   * Grid decorator's key
   */
  public static GRID_ANNOTATION = 'custom:annotations:grid';

  /**
   * Display decorator's key used for grids' columns
   */
  public static DISPLAY_ANNOTATION = 'custom:annotations:display';

  /**
   * Custom decorator's key
   */
  public static CUSTOM = 'custom:annotations:custom';

  /**
   * Unique key to proof decorator is dropdown
   */
  public static DROPDOWN = 'custom:annotations:dropdown';

  /**
   * Unique key to proof decorator is datepicker
   */
  public static DATEPICKER = 'custom:annotations:datepicker';

  /**
   * Unique key to proof decorator is timepicker
   */
  public static TIMEPICKER = 'custom:annotations:datepicker';

  /**
   * Column Name decorator's key
   */
  public static COLUMN_NAME = 'custom:annotations:columnname';

  /**
   * Column Name decorator's key
   */
  public static PRIMARY_KEY = 'custom:annotations:primaryKey';
}
