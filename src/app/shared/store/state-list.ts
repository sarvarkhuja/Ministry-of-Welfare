import { SnapshotState } from './snapshot/snapshot.state';
import { PermissionState } from './permission/permission.state';
import { AuthState } from './auth/auth.state';
import { UserInfoState } from './configurations/user-info/user-info.state';
import { LookupsState } from './lookups/lookups.state';
import { SystemConfigState } from './configurations/system-config/system-config.state';
import { GridSettingsState } from './grid/grid-settings.state';

/**
 *
 */
export const StateList = [
  GridSettingsState,
  SystemConfigState,
  UserInfoState,
  LookupsState,
  AuthState,
  PermissionState,
  SnapshotState,
];

/**
 *
 */
export const StorageStateList = [
  GridSettingsState,
  SystemConfigState,
  LookupsState,
  UserInfoState,
  PermissionState,
];
