/**
 * Base model extended by other query models
 */
export class QueryModel {
  /**
   * Number of items per page
   */
  pageLength?: number;

  /**
   * Default page number
   */
  pageNumber?: number;
}
