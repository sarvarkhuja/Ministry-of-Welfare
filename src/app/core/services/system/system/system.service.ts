import { ResourceService } from './../resource/resource.service';
import {
  SetCompanyConfig,
  ClearCompanyConfig,
  SetBuildVersion,
} from './../../../../shared/store/configurations/system-config/system-config.action';
import { UserInfoState } from './../../../../shared/store/configurations/user-info/user-info.state';
import { CompanyInfoResponse } from './../../../models/company/company-info-response.model';
import { SystemConfigState } from '../../../../shared/store/configurations/system-config/system-config.state';
import { Store } from '@ngxs/store';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EndpointSettings } from '../../../configs/endpoint.settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DITokens } from '../../../configs/di-tokens';
import { Injectable, Inject } from '@angular/core';
import { JsonHelper } from '../../../helpers/json.helper';
import { SignOut } from 'src/app/shared/store/auth/auth.action';
import { ClearUserData } from 'src/app/shared/store/configurations/user-info/user-info.action';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  constructor(
    @Inject(DITokens.ENDPOINT_URL) private endpoint: string,
    private http: HttpClient,
    private store: Store
  ) {}

  /**
   * Sets up portal mode, clears company metadata if it is portal mode
   */
  setupPortalMode(): void {
    const isPortal = this.store.selectSnapshot(SystemConfigState.isPortal);
    if (isPortal) {
      this.store.dispatch(new ClearCompanyConfig());
    }
  }

  initializeDefinitions(): Observable<CompanyInfoResponse> {
    return of(new CompanyInfoResponse());
  }

  preLoginValidation(companyId: number, employeeName: string): Observable<CompanyInfoResponse> {
    const model = {
      languageId: this.store.selectSnapshot(UserInfoState.lastLanguage)?.code,
      companyId,
      checkComp: true,
      employeeName,
    };
    return this.http
      .post<CompanyInfoResponse>(this.endpoint + EndpointSettings.PRE_LOGIN_VALIDATE, model)
      .pipe(map((data) => JsonHelper.toCamel(data)));
  }

  public compareVersion(currentVersion: string): void {
    const lastVersion = this.store.selectSnapshot(SystemConfigState.buildVersion);
    if (!lastVersion) {
      this.store.dispatch(new SetBuildVersion(currentVersion));
      return;
    }
    if (currentVersion !== lastVersion) {
      this.store.dispatch(new SignOut());
      this.store.dispatch(new ClearUserData());
      this.store.dispatch(new ClearCompanyConfig());
      this.store.dispatch(new SetBuildVersion(currentVersion));
    }
  }
}
