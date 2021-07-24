import { TranslationModel } from './../../../core/models/translation.model';
import { State, Action, StateContext, Selector, Select, createSelector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ResourceStateModel } from './resource-state.model';
import { SetResource, GetByDictionary } from './resource.action';

@State<ResourceStateModel>({
  name: 'resources',
})
@Injectable()
export class ResourcesState {
  public static getDictionary = (code: string) => {
    return createSelector([ResourcesState], (state: ResourceStateModel) =>
      state.dictionaries.find((s) => s.code === code)
    );
  }

  /**
   *
   */
  @Selector()
  public static dictionaries(state: ResourceStateModel): TranslationModel[] {
    return state.dictionaries;
  }

  @Selector()
  public static dictionariesMessage(state: ResourceStateModel): TranslationModel[] {
    return state.dictionaryMessages;
  }

  /**
   *
   * @param ctx StateContext
   * @param payload Value to store
   */
  @Action(SetResource)
  public setResourcesPack(ctx: StateContext<ResourceStateModel>, { payload }: SetResource): void {
    if (payload) {
      ctx.setState(payload);
    }
  }
}
