import { Observable } from 'rxjs';

export class AutocompleteOptions {
  /**
   *
   */
  key?: string;

  /**
   *
   */
  source?: Observable<any[]>;

  /**
   *
   */
  value?: any;

  /**
   *
   */
  defaultValue?: string;

  /**
   *
   */
  title!: string;

  /**
   *
   */
  width?: number;

  /**
   *
   */
  isDisabled?: boolean;
}
