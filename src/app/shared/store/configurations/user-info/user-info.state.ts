import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LanguageModel } from 'src/app/core/models/language.model';
import { UISetting } from 'src/app/core/models/types/ui-setting';
import { UserDataModel } from './../../../../layout/auth/models/user-data.model';
import { UserInfoStateModel } from './user-info-state.model';
import {
  ClearUserData,
  ClearUserMetaData, SetADSUser, SetChosenEmloyeeCode, SetLastUser,
  SetLogoutOccurence, SetUiSetting, SetUserData, SetUserLanguage, SetUserMetadata
} from './user-info.action';

@State<UserInfoStateModel>({
  name: 'userInfo',
  defaults: {
    adsUser: '',
    lastLanguage: {
      code: 3,
      direction: 'RTL',
      helpUrl: '',
      description: '',
      shortName: '',
    },
    lastUser: undefined,
    logoutHasOccurred: 0,
    chosenEmployeeCode: ''
  },
})
@Injectable()
export class UserInfoState {
  /**
   *
   */
  @Selector()
  public static lastLanguage(state: UserInfoStateModel): LanguageModel {
    return state.lastLanguage;
  }

  @Selector()
  static isUserLangRTL(state: UserInfoStateModel): boolean {
    return state.lastLanguage.direction === 'RTL';
  }

  @Selector()
  static userLangDirection(state: UserInfoStateModel): string {
    return state.lastLanguage.direction;
  }

  @Selector()
  static lastUser(state: UserInfoStateModel): string | undefined {
    return state.lastUser?.idOrName;
  }

  @Selector()
  static userData(state: UserInfoStateModel): UserDataModel | undefined {
    return state.generalInfo;
  }

  @Selector()
  static userMetadata(state: UserInfoStateModel): any {
    return state.metadata;
  }

  @Selector()
  static currentPayrollMonth(state: UserInfoStateModel): string {
    return state.metadata.payrollMonth;
  }

  @Selector()
  static parameters(state: UserInfoStateModel): any {
    return state.metadata?.payrollCompanyParameters;
  }

  @Selector()
  static uiSettings(state: UserInfoStateModel): UISetting | undefined {
    return state.uiSettings;
  }

  @Selector()
  static sectionTools(state: UserInfoStateModel): any {
    return state.metadata?.sectionTools;
  }

  @Selector()
  static chosenEmployeeCode(state: UserInfoStateModel): any {
    return state?.chosenEmployeeCode;
  }

  @Action(SetUserLanguage)
  setLastLanguage(ctx: StateContext<UserInfoStateModel>, { lang }: SetUserLanguage): void {
    ctx.patchState({ lastLanguage: lang });
  }

  @Action(SetLastUser)
  setLastUser(ctx: StateContext<UserInfoStateModel>, { payload }: SetLastUser): void {
    ctx.patchState({ lastUser: payload });
  }

  @Action(SetADSUser)
  setADUser(ctx: StateContext<UserInfoStateModel>, { username }: SetADSUser): void {
    ctx.patchState({ adsUser: username });
  }

  @Action(SetLogoutOccurence)
  setLogoutOccurence(ctx: StateContext<UserInfoStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({ logoutHasOccurred: ++state.logoutHasOccurred });
  }

  @Action(SetUserMetadata)
  setUserMetadata(ctx: StateContext<UserInfoStateModel>, { payload }: SetUserMetadata): void {
    if (!payload) {
      return;
    }
    ctx.patchState({ metadata: payload });
  }

  @Action(SetUserData)
  setUserHeaderData(ctx: StateContext<UserInfoStateModel>, { payload }: SetUserData): void {
    if (!payload) {
      return;
    }
    ctx.patchState({ generalInfo: payload });
  }

  @Action(ClearUserData)
  clearUserData(ctx: StateContext<UserInfoStateModel>): void {
    const state = ctx.getState();
    const { generalInfo, ...newState } = state;
    ctx.setState(newState);
  }

  @Action(SetChosenEmloyeeCode)
  setChosenEmployeeCode(ctx: StateContext<UserInfoStateModel>, { payload }: SetChosenEmloyeeCode): void {
    ctx.patchState({ chosenEmployeeCode: payload });
  }

  @Action(ClearUserMetaData)
  clearUserMetaData(ctx: StateContext<UserInfoStateModel>): void {
    const state = ctx.getState();
    const { metadata, ...newState } = state;
    ctx.setState(newState);
  }

  @Action(SetUiSetting)
  setUiSettings(ctx: StateContext<UserInfoStateModel>, { payload }: SetUiSetting): void {
    const state = ctx.getState();
    state.uiSettings = { ...state.uiSettings, ...payload };
    ctx.setState(state);
  }
}
