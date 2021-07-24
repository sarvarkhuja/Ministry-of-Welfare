import { PermissionState } from './../../shared/store/permission/permission.state';
import { Store } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { Init } from './interfaces/init';
import { ActionType } from '@layout/dashboard/roles/models/action-type.enum';

@Injectable({
  providedIn: 'root',
})
export class PermissionService implements Init {
  /**
   * Constructor
   * @param endpoint Backend base url
   * @param http Http client
   * @param store Global storage
   */
  constructor(private store: Store) {}

  /**
   * Initializes necessary properties, calls necessary functions
   * @returns `void`
   */
  init(): void {}

  /**
   * Checks whether given permission `code` exists in storage in a browser
   * @param code Permission code
   * @returns `boolean`
   */
  hasPermission(code: string): boolean {
    return !!this.store.selectSnapshot(PermissionState.entriesByCode(code));
  }

  hasAccessToMenu(code: string): boolean {
    const entries = this.store.selectSnapshot(PermissionState.entriesByCode(code));

    return entries.some(entry => entry.actionId !== ActionType.Deny);
  }
}
