import { PermissionModel } from './../../../core/models/permission.model';

/**
 * Response model for login by profile api
 */
export class LoginByProfileResponseModel {
  /**
   * Permissions list
   */
  permissions!: PermissionModel[];

  /**
   * Management permissions
   */
  managementDashboardsPermissions!: PermissionModel[];

  /**
   * Employee permissions 
   */
  employeeDashboardsPermissions!: PermissionModel[];
}
