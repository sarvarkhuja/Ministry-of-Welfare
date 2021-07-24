import { Observable } from 'rxjs';
/**
 * Class to configure Dropdown decorator
 */
export class DropdownOptions {
  /**
   * Describes field to bind to text in order to show in dropdown
   */
  text!: string | string[];

  /**
   * Describes field to bind to value
   */
  value!: string;

  /**
   * API url to get data
   */
  source!: string | Observable<any[]>;

  /**
   * Template to customize text
   */
  template?: string;
}
