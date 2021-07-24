import { Storage } from './../../../core/helpers/storage.helper';
import { RemoveLookup, SetLookup } from './lookups.action';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { LookupsStateModel } from './lookups-state.model';

@State({
  name: 'lookups',
  defaults: undefined,
})
@Injectable()
export class LookupsState {
  @Selector()
  public static lookups(ctx: StateContext<LookupsStateModel>): any {
    const state = ctx.getState();
    if (!state) {
    }
    return state;
  }

  public static lookupOf = (name: string) => createSelector([LookupsState], (state: LookupsStateModel) => state[name]);

  @Action(SetLookup)
  setLanguages(ctx: StateContext<LookupsStateModel>, { lookupCacheName, payload }: SetLookup): void {
    ctx.patchState({ [lookupCacheName]: payload });
  }

  @Action(RemoveLookup)
  removeLookup(ctx: StateContext<LookupsStateModel>, { lookupName }: RemoveLookup): void {
    ctx.setState({ [lookupName]: null });
  }
}
