import { PersonalDetailsTabComponent } from './../employee-information/components/employee-tabs/single-tabs/personal-details-tab/personal-details-tab.component';
import { PermissionName } from './../components/menu/permission-name.enum';
import { PermissionGuard } from './../../../core/guards/permission.guard';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { Routes, RouterModule } from '@angular/router';

const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [PermissionName.EMPLOYEES] },
    children: [
      {
        path: '',
        component: EmployeeListComponent,
      },
      {
        path: 'add',
        component: PersonalDetailsTabComponent,
      },
      {
        path: ':id/edit',
      },

      // put other paths before the wildcard route ('**')
      // if the requested URL doesn't match any of the above
      {
        path: '**',
        redirectTo: '/employees',
      },
    ],
  },
];

export const EmployeeRoutes = RouterModule.forChild(EMPLOYEE_ROUTES);
