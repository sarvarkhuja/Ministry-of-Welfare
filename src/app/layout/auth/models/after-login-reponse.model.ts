import { CompanyPreference } from '../../../core/models/company/company-preference.model';
import { PermissionModel } from '../../../core/models/permission.model';

// TODO: remove if not used
export interface AfterLoginResponseModel {
  companyPermissions?: PermissionModel[];
  companyPreferences?: CompanyPreference[];
  empDashboardsPermissions?: PermissionModel[];
  employeeNumber: number;
  mngDashboardsPermissions?: PermissionModel[];
  permissions?: PermissionModel[];
}
