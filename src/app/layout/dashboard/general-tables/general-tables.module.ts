import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralTableItemComponent } from './components/general-table-item/general-table-item.component';
import { GeneralTablesComponent } from './components/general-tables/general-tables.component';
import { RolesRoutes } from './general-tables.routing';


@NgModule({
  declarations: [
    GeneralTablesComponent,
    GeneralTableItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RolesRoutes
  ],
  exports: []
})
export class GeneralTablesModule {

}
