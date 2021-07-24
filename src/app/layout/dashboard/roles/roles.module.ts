import { DepartmentMultiselectComponent } from './components/roles/department-multiselect/department-multiselect.component';
import { RolesPermissionGridComponent } from './components/roles/roles-permission/roles-permission-grid/roles-permission-grid.component';
import { RolesPermissionComponent } from './components/roles/roles-permission/roles-permission.component';
import { RolesComponent } from './components/roles/roles.component';
import { RolesRoutes } from './roles.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
    imports: [
        CommonModule, 
        DialogModule, 
        InputsModule, 
        LayoutModule, 
        GridModule,
        FormsModule, 
        ReactiveFormsModule, 
        RolesRoutes,
        LabelModule,
        DropDownsModule],
    declarations: [
        RolesComponent,
        RolesPermissionComponent,
        DepartmentMultiselectComponent,
        RolesPermissionGridComponent,
    ],
    providers: [
    ],
})
export class RolesModule { }
