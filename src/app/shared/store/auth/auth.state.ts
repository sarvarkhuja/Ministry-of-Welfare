import { Injectable } from '@angular/core';
import { Storage } from '@core/helpers/storage.helper';
import { SignInResponseModel } from '@layout/auth/models/sign-in-response.model';
import { AuthService } from '@layout/auth/services/auth.service';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SetEntries, SetSiteMaps } from './../permission/permission.action';
import { AuthStateModel } from './auth-state.model';
import { ClearToken, SignIn, SignOut } from './auth.action';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null,
  },
})
@Injectable()
export class AuthState {
  /**
   *
   * @param state State model
   */
  @Selector()
  static token(state: AuthStateModel): string | null {
    const token = state.token || Storage.getLocal('token') || Storage.getSession('token');
    state.token = token;
    return token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    const token = state.token || Storage.getLocal('token') || Storage.getSession('token');
    state.token = token;
    return !!state.token;
  }

  constructor(private $auth: AuthService, private store: Store) { }

  @Action(SignIn)
  login(ctx: StateContext<AuthStateModel>, { payload }: SignIn): Observable<SignInResponseModel> {
    return this.$auth.signIn(payload).pipe(
      tap((result: SignInResponseModel) => {
        ctx.setState({ token: result.accessToken, username: payload.username });
        Storage.setSession('token', result.accessToken);
        this.store.dispatch(new SetSiteMaps(result.siteMaps));
        this.store.dispatch(new SetEntries(result.entries));
      })
    );
  }

  @Action(SignOut)
  logout(ctx: StateContext<AuthStateModel>): Observable<boolean> {
    const state = ctx.getState();
    if (state.token && state.username) {
      return this.$auth.signOut({ token: state.token, username: state.username }).pipe(
        tap((status) => {
          ctx.setState({ token: null, username: null });
          Storage.removeLocal('token');
          Storage.removeSession('token');
        })
      );
    }
    return of();
  }

  @Action(ClearToken)
  clearToken(ctx: StateContext<AuthStateModel>): void {
    ctx.setState({ token: null, username: null });
    if (Storage.hasLocal('token')) {
      Storage.removeLocal('token');
    }
    if (Storage.hasSession('token')) {
      Storage.removeSession('token');
    }
  }
}
