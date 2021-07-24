import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { RolesRoutes } from './general-tables.routing';
import { GeneralTablesComponent } from './components/general-tables/general-tables.component';
import { ComboBoxModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GeneralTableItemComponent } from './components/general-table-item/general-table-item.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralTablesComponent,
    GeneralTableItemComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    SharedModule,
    RolesRoutes
  ],
  exports: []
})
export class GeneralTablesModule {

}
