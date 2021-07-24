import { SiteMap } from './../../../layout/auth/models/site-map.model';
import { AccessControlEntry } from './../../../layout/auth/models/access-control-entry.model';

export class SetEntries {
  /**
   *
   */
  public static type = '[Permissions] Set entries';

  /**
   *
   */
  constructor(public payload: AccessControlEntry[]) {}
}

export class SetSiteMaps {
  /**
   *
   */
  public static type = '[Permissions] Set sitemaps';

  /**
   *
   */
  constructor(public payload: SiteMap[]) {}
}
