import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { SystemUserComponent } from './components/system-user/system-user.component';
import { SystemUserRoutes } from './sytsem-user.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemUserRoutes
  ],
  declarations: [
    SystemUserComponent
  ],
  exports: [],
})
export class SystemUserModule {}
