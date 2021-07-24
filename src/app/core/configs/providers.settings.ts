import { SettingsHelper } from 'src/app/core/helpers/settings.helper';
import { UserInfoState } from './../../shared/store/configurations/user-info/user-info.state';
// import { RTL } from '@progress/kendo-angular-l10n';
import { Store } from '@ngxs/store';
import { Provider } from '@angular/core';
import { DITokens } from './di-tokens';

// /**
//  * Custom RTL provider for modules
//  */
// export const RTL_PROVIDER: Provider = {
//   provide: RTL,
//   useFactory: (store: Store) => {
//     const isRTL = store.selectSnapshot(UserInfoState.isUserLangRTL);
//     return isRTL;
//   },
//   deps: [Store],
// };

export const ENDPOINT_PROVIDER: Provider = {
  provide: DITokens.ENDPOINT_URL,
  useFactory: () => SettingsHelper.settings.endpoint,
};
