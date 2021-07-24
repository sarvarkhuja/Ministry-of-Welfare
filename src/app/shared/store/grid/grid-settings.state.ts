import { SetGridSettings, SetColumnOrder } from './grid-settings.action';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, createSelector } from '@ngxs/store';
import { GridSettingsStateModel } from './grid-settings-state.model';

@State<GridSettingsStateModel>({
  name: 'gridSettings',
  defaults: undefined,
})
@Injectable()
export class GridSettingsState {
  /**
   *
   * @param name Grid(table) name
   */
  public static byName = (name: string) =>
    createSelector([GridSettingsState], (state: GridSettingsStateModel) => state[name])

  /**
   *
   */
  @Action(SetGridSettings)
  public setGridSettings(ctx: StateContext<GridSettingsStateModel>, { payload }: SetGridSettings): void {
    ctx.patchState({ [payload.key]: payload.value });
  }

  /**
   *
   */
  @Action(SetColumnOrder)
  public setGridSetting(ctx: StateContext<GridSettingsStateModel>, { payload }: SetColumnOrder): void {
    const state = ctx.getState()[payload.key];
    const value = state.find((s) => s.dataField === payload.value.dataField);
    if (value) {
      state.push(payload.value);
    }
    ctx.setState({ [payload.key]: state });
  }
}
