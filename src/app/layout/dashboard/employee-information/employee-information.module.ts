import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { DxDateBoxModule, DxRadioGroupModule, DxTextAreaModule, DxToastModule } from 'devextreme-angular';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
import { EmployeeQuickSearchComponent } from './components/employee-quick-search/employee-quick-search.component';
import { CourseCyclesTabComponent } from './components/employee-tabs/single-tabs/course-cycles-tab/course-cycles-tab.component';
import { EmployeeObligationTabComponent } from './components/employee-tabs/single-tabs/employee-obligation-tab/employee-obligation-tab.component';
import { GeneralCoursesTabComponent } from './components/employee-tabs/single-tabs/general-courses-tab/general-courses-tab.component';
import { JobsTabComponent } from './components/employee-tabs/single-tabs/jobs-tab/jobs-tab.component';
import { LeaveWorkTabComponent } from './components/employee-tabs/single-tabs/leave-work-tab/leave-work-tab.component';
import { PersonalDetailsTabComponent } from './components/employee-tabs/single-tabs/personal-details-tab/personal-details-tab.component';
import { PersonalPaymentTabComponent } from './components/employee-tabs/single-tabs/personal-payment-tab/personal-payment-tab.component';
import { ProficiencyRewardTabComponent } from './components/employee-tabs/single-tabs/proficiency-reward-tab/proficiency-reward-tab.component';
import { RolesTabComponent } from './components/employee-tabs/single-tabs/roles-tab/roles-tab.component';
import { WorkspacesTabComponent } from './components/employee-tabs/single-tabs/workspaces-tab/workspaces-tab.component';
import { EmployeeInfoRoutes } from './employee-information.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    SharedModule,
    DxDateBoxModule,
    EmployeeInfoRoutes,
    DxToastModule,

  ],
  declarations: [
    EmployeeInformationComponent,
    EmployeeQuickSearchComponent,
    WorkspacesTabComponent,
    ProficiencyRewardTabComponent,
    EmployeeObligationTabComponent,
    GeneralCoursesTabComponent,
    CourseCyclesTabComponent,
    PersonalDetailsTabComponent,
    PersonalPaymentTabComponent,
    RolesTabComponent,
    LeaveWorkTabComponent,
    JobsTabComponent
  ],
  providers: [],
})
export class EmployeeInformationModule {}
