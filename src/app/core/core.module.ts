import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule, Store } from '@ngxs/store';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { SettingsHelper } from 'src/app/core/helpers/settings.helper';

import { StateList, StorageStateList } from '../shared/store/state-list';
import { AuthState } from './../shared/store/auth/auth.state';
import { LoaderSettings } from './configs/loader.settings';
import { getDomain } from './utils';

/**
 * Spinner options. Describes spinners style, behavior and etc
 */
const ngxLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.cubeGrid,
  pbThickness: 3,
  fgsSize: 0,
  pbColor: '#e75d1b',
  overlayColor: 'rgba(40,40,40,0.3)',
};

/**
 *
 * @param store Ngxs Store to access storage in the fuction
 */
export function jwtOptionsFactory(store: Store): any {
  return {
    /** specifies where to get token */
    tokenGetter: () => {
      return store.selectSnapshot(AuthState.token);
    },
    whitelistedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    allowedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    skipWhenExpired:
      true /** If set true jwt token will not be attached to request when token is expired */,
  };
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    /** NgxsModule for store usage, StateList is for states which ngxs store serves */
    NgxsModule.forRoot(StateList, {}),

    /** Store plugin to store given states to browsers local storage */
    NgxsStoragePluginModule.forRoot({
      key: StorageStateList,
    }),

    /** Module to show spinners while pages are loading */
    NgxUiLoaderModule.forRoot(ngxLoaderConfig),

    /**
     *  Module to show spinners for http requests,
     * you can exclude non-required URLs by adding them to LoaderSettings.EXCLUDED_URL list
     */
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      excludeRegexp: LoaderSettings.EXCLUDED_URL,
    }),

    /**
     * Module to support JWT Authentication.
     * jwtOptionsProvider is for settings
     */
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Store],
      },
    }),

    /** Custom notification module includes kendo dialog and window to show notifications */
  ],
  declarations: [
    /** Declare necessary components, pipes, directives related to core module */
  ],
})
export class CoreModule {}
