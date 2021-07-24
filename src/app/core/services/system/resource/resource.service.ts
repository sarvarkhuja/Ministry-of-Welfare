import { SystemConfigState } from './../../../../shared/store/configurations/system-config/system-config.state';
import { UserInfoState } from 'src/app/shared/store/configurations/user-info/user-info.state';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { ResourceQueryModel, ResourceResponse } from './../../../models/resource.model';
import { Injectable, Inject } from '@angular/core';
import { DITokens } from 'src/app/core/configs/di-tokens';
import { HttpClient } from '@angular/common/http';
import { Init } from '../../interfaces/init';
import { SetUserLanguage } from 'src/app/shared/store/configurations/user-info/user-info.action';
const nameof = <T>(name: Extract<keyof T, string>): string => name;

@Injectable({
  providedIn: 'root',
})
export class ResourceService implements Init {
  /**
   *
   * @param http HttpClient
   */
  constructor(
    @Inject(DITokens.ENDPOINT_URL) private endpoint: string,
    private http: HttpClient,
    private store: Store,
    private actions: Actions
  ) {}

  /**
   *
   */
  init(): void {
    this.subscribeLanguageState();
  }

  storeDefaultResources(): void {
    const isPortal = this.store.selectSnapshot(SystemConfigState.isPortal);
    if (isPortal) {
      this.fetchResources();
    }
  }

  fetchResources(): void {
    const company = this.store.selectSnapshot(SystemConfigState.currentCompany);
    const query: ResourceQueryModel = {
      languageId: 3,
      companyId: company ? company.companyId : 0,
      needLoadTooltip: true,
    };
    const currentLanguage = this.store.selectSnapshot(UserInfoState.lastLanguage);
    if (currentLanguage) {
      query.languageId = currentLanguage.code;
    }
  }

  subscribeLanguageState(): void {
    this.actions.pipe(ofActionDispatched(SetUserLanguage)).subscribe(() => this.fetchResources());
  }
}
