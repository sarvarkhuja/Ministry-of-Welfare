import { ClearUserData, ClearUserMetaData } from './../../../shared/store/configurations/user-info/user-info.action';
import { AfterLoginResponseModel } from './../models/after-login-reponse.model';
import { AfterLoginModel } from './../models/after-login.model';
import { UserInfoState } from './../../../shared/store/configurations/user-info/user-info.state';
import { SystemConfigState } from './../../../shared/store/configurations/system-config/system-config.state';
import { Store } from '@ngxs/store';
import { InjectorHelper } from './../../../core/helpers/injector.helper';
import { SignInModel } from '../models/sign-in.model';
import { SetUserMetadata } from 'src/app/shared/store/configurations/user-info/user-info.action';
export class AuthHelper {
  static getAfterLoginModel(model: SignInModel): AfterLoginModel {
    try {
      const store = InjectorHelper.injector.get(Store);
      const companyInfo = store.selectSnapshot(SystemConfigState.companyFullInfo);
      if (!companyInfo) {
        throw new Error('company_not_found');
      }
      const result: AfterLoginModel = {
        companyId: companyInfo.companyId,
        companyParams: companyInfo.parameters,
        companyPreferences: companyInfo.preferences,
        username: model.username,
        languageId: store.selectSnapshot(UserInfoState.lastLanguage)?.code,
        loginByExistedRememberMe: false,
        logoutHasOccurredByUser: false,
        otpCode: '',
        otpPhone: '',
        password: btoa(model.password),
        rememberMe: !!model.keepMeSigned,
      };

      return result;
    } catch (error) {
      throw error;
    }
  }

  static convertToSignInModel(value: any): SignInModel {
    const model: SignInModel = {
      username: value.username,
      password: value.password,
      keepMeSigned: value.keepMeSigned,
      companyId: value.companyId,
      otpCode: value.otpCode,
      otpPhone: value.otpPhone,
      profile: value.profile
    };
    return model;
  }

  static storeAfterLoginData(data: AfterLoginResponseModel): void {
    if (!data) {
      return;
    }
    const store = InjectorHelper.injector.get(Store);

    if (data) {
      store.dispatch(new SetUserMetadata(data));
    }
  }

  static clearAuthRelatedMetadata(): void {
    const store = InjectorHelper.injector.get(Store);
    store.dispatch(new ClearUserData());
    store.dispatch(new ClearUserMetaData());
  }
}
