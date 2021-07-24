import { SiteMapPermission } from './site-map-permission.model';

export interface SiteMap {
  /**
   *
   */
  name: string;

  /**
   *
   */
  permissions: SiteMapPermission[];
}
