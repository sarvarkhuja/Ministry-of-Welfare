import { Injectable } from '@angular/core';
import { ActionType } from '@layout/dashboard/roles/models/action-type.enum';
import { Store } from '@ngxs/store';
import { PermissionState } from './../../shared/store/permission/permission.state';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  /**
   * Constructor
   * @param endpoint Backend base url
   * @param http Http client
   * @param store Global storage
   */
  constructor(private store: Store) {}

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

    return entries.some((entry) => entry.actionId !== ActionType.Deny);
  }
}
