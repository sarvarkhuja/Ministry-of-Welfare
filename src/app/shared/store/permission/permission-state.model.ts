import { SiteMap } from './../../../layout/auth/models/site-map.model';
import { AccessControlEntry } from './../../../layout/auth/models/access-control-entry.model';

/**
 *
 */
export interface PermissionStateModel {
  /**
   *
   */
  permissions: any[];

  /**
   *
   */
  siteMaps: SiteMap[];

  /**
   *
   */
  entries: AccessControlEntry[];
}
