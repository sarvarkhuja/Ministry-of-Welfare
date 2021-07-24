/**
 *
 */
export abstract class QueryModel {
  /**
   *
   */
  pageLength!: number;

  /**
   *
   */
  pageNo!: number;

  /**
   *
   */
  pagingBy!: boolean;

  /**
   *
   */
  searchBy!: string;

  /**
   *
   */
  searchVal!: string;

  /**
   *
   */
  searchExact!: boolean;
}
