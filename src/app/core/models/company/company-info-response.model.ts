import { CompanyParams } from './company-params.model';
import { CompanyPreference } from './company-preference.model';
export class CompanyInfoResponse {
  // TODO: open one by one once it is required
  // compDbName!: string;
  companyId!: string;
  parameters!: CompanyParams[];
  companyName!: string;
  // TODO: open one by one once it is required
  // companyermissions!: PermissionModel[];
  preferences!: CompanyPreference[];
  // TODO: open one by one once it is required
  // companyPreferencesPermissions!: PermissionModel[];
  // dateExpire!: string;
  // dateFormat!: string;
  // isExistsHelpFile!: boolean;
  // errorMsgId?: string;
  // errorMsgType?: number;
  // resources!: ResourceResponse;
}
