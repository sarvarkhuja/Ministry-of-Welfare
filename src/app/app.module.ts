import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENDPOINT_PROVIDER } from '@core/configs/providers.settings';
import { CoreModule } from '@core/core.module';
import { InjectorHelper } from '@core/helpers/injector.helper';
import { ServerErrorInterceptor } from '@core/interceptors/server-error.interceptor';
import { GlobalErrorHandler } from '@core/services/system/error/global-error.handler';
import {
  DxBulletModule,
  DxButtonModule,
  DxDataGridModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
  ],
  providers: [
    ENDPOINT_PROVIDER,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'he',
    },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  /**
   *
   */
  constructor(injector: Injector) {
    InjectorHelper.injector = injector;
  }
}
