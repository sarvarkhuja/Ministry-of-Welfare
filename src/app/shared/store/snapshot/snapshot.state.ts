import { Action, createSelector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SnapshotStateModel } from './snapshot-state.model';
import { SaveGridData } from './snapshot.action';

@State<SnapshotStateModel>({
  name: 'snapshot',
  defaults: undefined,
})
@Injectable({ providedIn: 'root' })
export class SnapshotState {
  /**
   *
   */
  public static gridSnapshot = (name: string) =>
    createSelector([SnapshotState], (state: SnapshotStateModel) => state.grid?.find((s) => s.name === name))

  /**
   *
   */
  @Action(SaveGridData)
  public saveGridData(ctx: StateContext<SnapshotStateModel>, payload: any): void {
    const state = ctx.getState();
    if (!state.grid) {
      state.grid = [];
    }

    const snapshot = state.grid.find((s) => s.name === payload.tableName);
    if (snapshot) {
      snapshot.data = payload.data;
    } else {
      state.grid.push({ data: payload.data, name: payload.tableName });
    }

    ctx.setState(state);
  }
}
