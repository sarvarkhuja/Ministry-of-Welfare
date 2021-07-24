import { UserDataModel } from './../../../../layout/auth/models/user-data.model';
import { LanguageModel } from './../../../../core/models/language.model';
import { UISetting } from 'src/app/core/models/types/ui-setting';
export class SetUserLanguage {
  public static type = '[UserInfo] Set user language';

  constructor(public lang: LanguageModel) {}
}

export class SetLastUser {
  public static type = '[UserInfo] Set last user';

  constructor(public payload: { idOrName: string; isId: boolean } | null) {}
}

export class SetADSUser {
  public static type = '[UserInfo] Set ADS user';

  constructor(public username: string) {}
}

export class SetLogoutOccurence {
  public static type = '[UserInfo] Set Logout Occurence';
}

export class SetUserMetadata {
  public static type = '[UserInfo] Set User metadata';
  /**
   *
   */
  constructor(public payload: any) {}
}

export class SetUserData {
  public static type = '[UserInfo] Set User data';
  constructor(public payload: UserDataModel) {}
}

export class ClearUserData {
  public static type = '[UserInfo] Clear User data';
}

export class ClearUserMetaData {
  public static type = '[UserInfo] Clear User metadata';
}

export class SetChosenEmloyeeCode {
  public static type = '[UserInfo] Set Chosen Employee code';
  constructor(public payload: string = '') {}
}

export class SetUiSetting {
  public static type = '[UserInfo] Set ui settings';

  /**
   *
   */
  constructor(public payload: UISetting) {}
}
