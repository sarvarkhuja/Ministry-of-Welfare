import { QueryModel } from './../../../../core/models/types/query.model';
export class AutocompleteQuery extends QueryModel {
  /**
   *
   */
  empNo?: number;

  /**
   *
   */
  userNo?: string;

  /**
   *
   */
  elemName!: string;

  /**
   *
   */
  pageSize!: number;

  /**
   *
   */
  pagingOrder!: boolean;

  /**
   *
   */
  otherParamsXML!: string;
}
