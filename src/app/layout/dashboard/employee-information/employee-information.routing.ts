import { RouterModule, Routes } from '@angular/router';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
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
import { Tabs } from './models/tab-navigation.helper';

const EMPLOYEE_INFO_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeInformationComponent,
    children: [
      {
        path: 'add',
        component: PersonalDetailsTabComponent,
      },
    ],
  },
  {
    path: ':nationalId',
    component: EmployeeInformationComponent,
    children: [
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: PersonalDetailsTabComponent,
      },
      {
        path: Tabs.PERSONAL_DETAILS,
        component: PersonalDetailsTabComponent,
      },
      {
        path: Tabs.WORKPLACES,
        component: WorkspacesTabComponent,
      },
      {
        path: Tabs.JOBS,
        component: JobsTabComponent,
      },
      {
        path: Tabs.ROLES,
        component: RolesTabComponent,
      },
      {
        path: Tabs.LEAVE_WORK,
        component: LeaveWorkTabComponent,
      },
      {
        path: Tabs.OBLIGATIONS,
        component: EmployeeObligationTabComponent,
      },
      {
        path: Tabs.PROFICIENCY_REWARDS,
        component: ProficiencyRewardTabComponent,
      },
      {
        path: Tabs.GENERAL_COURSES,
        component: GeneralCoursesTabComponent,
      },
      {
        path: Tabs.COURSE_CYCLES,
        component: CourseCyclesTabComponent,
      },
      {
        path: Tabs.PERSONAL_PAYMENT,
        component: PersonalPaymentTabComponent,
      },
    ],
  },
];

export const EmployeeInfoRoutes = RouterModule.forChild(EMPLOYEE_INFO_ROUTES);
