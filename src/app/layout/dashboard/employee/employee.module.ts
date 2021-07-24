import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { EmployeeRoutes } from './employee.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutes,
    SharedModule,
  ],
  declarations: [EmployeeComponent, EmployeeListComponent],
  providers: [],
})
export class EmployeeModule {}
