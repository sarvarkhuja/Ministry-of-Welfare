import { UserDataModel } from './../../../../layout/auth/models/user-data.model';
import { LanguageModel } from './../../../../core/models/language.model';
import { UISetting } from 'src/app/core/models/types/ui-setting';

export interface UserInfoStateModel {
  adsUser: string;
  lastLanguage: LanguageModel;
  lastUser?: { idOrName: string; isId: boolean } | null;
  logoutHasOccurred: number;
  metadata?: any;
  generalInfo?: UserDataModel;
  chosenEmployeeCode?: string;
  uiSettings?: UISetting;
}
