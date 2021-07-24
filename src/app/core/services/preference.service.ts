import { SystemConfigState } from 'src/app/shared/store/configurations/system-config/system-config.state';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreferenceService {
  /**
   *
   * @param store Store
   */
  constructor(private store: Store) {}

  /**
   *
   * @param key Preference name
   */
  isEnabled(key: string): boolean {
    return this.store.selectSnapshot(SystemConfigState.preferencebyName(key)) === '1';
  }
}
