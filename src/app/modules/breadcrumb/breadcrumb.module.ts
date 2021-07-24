import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbConfig } from './breadcrumb-config';
import { TranslateModule } from 'src/app/shared/translate.module';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService],
})
export class BreadcrumbModule {
  static forRoot(config: Partial<BreadcrumbConfig> = {}): ModuleWithProviders<BreadcrumbModule> {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        BreadcrumbService,
      ],
    };
  }
}
