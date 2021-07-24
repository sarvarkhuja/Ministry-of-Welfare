import { PermissionModel } from './../../../core/models/permission.model';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PermissionStateModel } from './permission-state.model';
import { SetEntries, SetSiteMaps } from './permission.action';

@State<PermissionStateModel>({
  name: 'permissions',
  defaults: undefined,
})
@Injectable()
export class PermissionState {
  /**
   *
   * @param state State model
   */
  @Selector()
  public static permissions(state: PermissionStateModel): PermissionModel[] {
    return state.permissions;
  }

  /**
   *
   * @param code Sitemap code
   */
  public static siteMapsByCode = (code: string) =>
    createSelector([PermissionState], (state: PermissionStateModel) =>
      state.siteMaps.find((siteMap) => !!siteMap.permissions.find((site: any) => site.code === code))
    )

  /**
   *
   * @param code Entry code
   */
  public static entriesByCode = (code: string) =>
    createSelector([PermissionState], (state: PermissionStateModel) =>
      state.entries.filter((entry: any) => entry.entryCode === code)
    )

  /**
   *
   */
  @Action(SetSiteMaps)
  public setSiteMaps(ctx: StateContext<PermissionStateModel>, { payload }: SetSiteMaps): void {
    ctx.patchState({ siteMaps: payload });
  }

  /**
   *
   */
  @Action(SetEntries)
  public setEntries(ctx: StateContext<PermissionStateModel>, { payload }: SetEntries): void {
    ctx.patchState({ entries: payload });
  }
}
