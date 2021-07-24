import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SettingsHelper } from '@core/helpers/settings.helper';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

SettingsHelper.load().then(() => platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error));
