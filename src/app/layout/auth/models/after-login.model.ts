import { CompanyParams } from '../../../core/models/company/company-params.model';
import { PermissionModel } from '../../../core/models/permission.model';
import { CompanyPreference } from '../../../core/models/company/company-preference.model';
export interface AfterLoginModel {
  companyId: string;
  companyParams?: CompanyParams[];
  companyPermissions?: PermissionModel[];
  companyPreferences?: CompanyPreference[];
  companyPreferencesPermissions?: PermissionModel[];
  username: string;
  languageId: number;
  loginByExistedRememberMe: boolean;
  logoutHasOccurredByUser: boolean;
  otpCode: string;
  otpPhone: string;
  password: string;
  rememberMe: boolean;
}
