import { SnapshotState } from './snapshot/snapshot.state';
import { PermissionState } from './permission/permission.state';
import { AuthState } from './auth/auth.state';
import { UserInfoState } from './configurations/user-info/user-info.state';
import { LookupsState } from './lookups/lookups.state';
import { SystemConfigState } from './configurations/system-config/system-config.state';
import { ResourcesState } from './translations/resource.state';
import { GridSettingsState } from './grid/grid-settings.state';

/**
 *
 */
export const StateList = [
  GridSettingsState,
  ResourcesState,
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
  ResourcesState,
  SystemConfigState,
  LookupsState,
  UserInfoState,
  PermissionState,
];
