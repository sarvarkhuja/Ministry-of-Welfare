import { CompanyParams } from './../../../../core/models/company/company-params.model';
import { CompanyPreference } from './../../../../core/models/company/company-preference.model';
import { CompanyInfoResponse } from './../../../../core/models/company/company-info-response.model';
import { CompanyShortInfo } from './../../../../core/models/company/company-short-info.model';
import { SetConfig, SetSystemConfig, SetCompanyConfig, ClearCompanyConfig, SetBuildVersion } from './system-config.action';
import { SystemConfigStateModel } from './system-config-state.model';
import { State, Action, StateContext, createSelector, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

@State<SystemConfigStateModel>({
  name: 'systemConfig',
})
@Injectable()
export class SystemConfigState {
  /**
   *
   */
  public static preferencebyName = (name: string) =>
    createSelector(
      [SystemConfigState],
      (state: SystemConfigStateModel) =>
        state.company?.preferences.find((s: CompanyPreference) => s.behaviorName === name)?.value
    )

  public static preferenceEnabled = (name: string) =>
    createSelector(
      [SystemConfigState],
      (state: SystemConfigStateModel) =>
        state.company?.preferences.find((s: CompanyPreference) => s.behaviorName === name)?.value === '1'
    )

  public static parameterByName = (name: string) =>
    createSelector([SystemConfigState], (state: SystemConfigStateModel) =>
      state.company?.parameters.find((s: CompanyParams) => s.fieldName === name)
    )

  public static parameterValueByName = (name: string) =>
    createSelector([SystemConfigState], (state: SystemConfigStateModel) =>
      state.company?.parameters.find((s: CompanyParams) => s.fieldName === name).fieldvalue
    )

  @Selector()
  public static isPortal(state: SystemConfigStateModel): boolean {
    return state.system.isPortal;
  }

  @Selector()
  public static buildVersion(state: SystemConfigStateModel): string {
    return state.version;
  }

  @Selector()
  public static isOTPEnabled(state: SystemConfigStateModel): boolean {
    const preferences: CompanyPreference[] = state.company.preferences;
    return preferences.find((s) => s.behaviorName === 'isOTPloginEnable')?.value === '1';
  }

  @Selector()
  public static currentCompany(state: SystemConfigStateModel): CompanyShortInfo {
    const company: CompanyShortInfo = {
      companyId: state.company.companyId,
      companyName: state.company.companyName,
    };
    return company;
  }

  @Selector()
  public static companyFullInfo(state: SystemConfigStateModel): CompanyInfoResponse | null {
    return state.company;
  }

  public static byName = (key: string) =>
    createSelector([SystemConfigState], (state: SystemConfigStateModel) => state.data[key])

  @Action(SetConfig)
  setConfig(ctx: StateContext<SystemConfigStateModel>, { payload }: SetConfig): void {
    ctx.patchState({ [payload.key]: payload.data });
  }

  @Action(SetSystemConfig)
  setSystemConfig(ctx: StateContext<SystemConfigStateModel>, { payload }: SetSystemConfig): void {
    ctx.patchState({ system: payload });
  }

  @Action(SetCompanyConfig)
  setCompanyConfig(ctx: StateContext<SystemConfigStateModel>, { payload }: SetCompanyConfig): void {
    ctx.patchState({ company: payload });
  }
  
  @Action(SetBuildVersion)
  setBuildVersion(ctx: StateContext<SystemConfigStateModel>, { payload }: SetBuildVersion): void {
    ctx.patchState({ version: payload });
  }

  @Action(ClearCompanyConfig)
  clearCompanyConfig(ctx: StateContext<SystemConfigStateModel>): void {
    ctx.patchState({ company: null });
  }
}
