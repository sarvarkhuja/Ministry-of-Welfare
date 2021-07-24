import { CourseCyclesTabComponent } from './components/employee-tabs/single-tabs/course-cycles-tab/course-cycles-tab.component';
import { RolesTabComponent } from './components/employee-tabs/single-tabs/roles-tab/roles-tab.component';
import { JobsTabComponent } from './components/employee-tabs/single-tabs/jobs-tab/jobs-tab.component';
import { LeaveWorkTabComponent } from './components/employee-tabs/single-tabs/leave-work-tab/leave-work-tab.component';
import { WorkspacesTabComponent } from './components/employee-tabs/single-tabs/workspaces-tab/workspaces-tab.component';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
import { EmployeeTabsComponent } from './components/employee-tabs/employee-tabs.component';
import { EmployeeQuickSearchComponent } from './components/employee-quick-search/employee-quick-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfoRoutes } from './employee-information.routing';
import { PersonalDetailsTabComponent } from './components/employee-tabs/single-tabs/personal-details-tab/personal-details-tab.component';
import { PersonalPaymentTabComponent } from './components/employee-tabs/single-tabs/personal-payment-tab/personal-payment-tab.component';

import { TabsComponent } from '@shared/components/tabs/tabs.component';
import { TabBodyComponent } from '@shared/components/tabs/tab-body.component';
import { TabItemComponent } from '@shared/components/tabs/tab-item.component';
import { TabLabelComponent } from '@shared/components/tabs/tab-label.component';
import { ProficiencyRewardTabComponent } from './components/employee-tabs/single-tabs/proficiency-reward-tab/proficiency-reward-tab.component';
import { EmployeeObligationTabComponent } from './components/employee-tabs/single-tabs/employee-obligation-tab/employee-obligation-tab.component';
import { GeneralCoursesTabComponent } from './components/employee-tabs/single-tabs/general-courses-tab/general-courses-tab.component';
import { DxDateBoxModule, DxRadioGroupModule } from 'devextreme-angular';
import { EmployeeInformationService } from './services/employee-information.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxRadioGroupModule,
    SharedModule,
    DxDateBoxModule,
    EmployeeInfoRoutes,
  ],
  declarations: [
    TabsComponent,
    TabItemComponent,
    TabLabelComponent,
    TabBodyComponent,

    EmployeeInformationComponent,
    EmployeeQuickSearchComponent,
    WorkspacesTabComponent,
    EmployeeTabsComponent,
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
