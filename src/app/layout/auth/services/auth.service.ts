import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { UserInfoState } from 'src/app/shared/store/configurations/user-info/user-info.state';
import { DITokens } from '../../../core/configs/di-tokens';
import { EndpointSettings } from '../../../core/configs/endpoint.settings';
import { SignInModel } from '../models/sign-in.model';
import { SignInResponseModel } from './../models/sign-in-response.model';
import { SignOutModel } from './../models/sign-out.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   *
   * @param endpoint Backend main domain url
   * @param http Service to send requests to APIs
   */
  constructor(
    @Inject(DITokens.ENDPOINT_URL) private endpoint: string,
    private http: HttpClient,
    private store: Store
  ) {}

  /**
   * Performs sign in process. Sends post request to API and gets credentials back
   * @param model Sign in model to specify with credential data
   */
  public signIn(model: SignInModel): Observable<SignInResponseModel> {
    const request = {
      clientId: '099153c2625149bc8ecb3e85e03f0022',
      username: model.username,
      companyId: model.companyId,
      password: btoa(model.password),
      otpCode: model.otpCode,
      profile: model.profile,
    };

    return this.http.post<SignInResponseModel>(this.endpoint + EndpointSettings.SIGN_IN, request);
  }

  /**
   * Performs sign out process. Sends post request to API and get result status true/false
   * @param model Data to sign out
   */
  public signOut(model: SignOutModel): Observable<boolean> {
    // TODO: open the comment for signout
    return of(); // this.http.post<boolean>(this.endpoint + EndpointSettings.SIGN_OUT, model);
  }

  /**
   * Validates if user exists
   * @param model `Credential`
   * @returns `Observable<ValidatedCredentialResult>`
   */
  validateUserCredentials(model: SignInModel): Observable<any> {
    model.password = btoa(model.password);
    model.languageId = this.store.selectSnapshot(UserInfoState.lastLanguage)?.code;
    return this.http.post<any>(this.endpoint + EndpointSettings.PRE_LOGIN_VALIDATE, model);
  }
}
