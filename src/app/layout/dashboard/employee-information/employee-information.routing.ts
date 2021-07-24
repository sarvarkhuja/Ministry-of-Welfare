import { EmployeeTabsComponent } from './components/employee-tabs/employee-tabs.component';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';
import { Routes, RouterModule } from '@angular/router';


const EMPLOYEE_INFO_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeInformationComponent,
    children: [
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: EmployeeTabsComponent
      },
      {
        path: 'edit/:nationalId',
        component: EmployeeTabsComponent
      },
    ]
  }
];

export const EmployeeInfoRoutes = RouterModule.forChild(EMPLOYEE_INFO_ROUTES);
