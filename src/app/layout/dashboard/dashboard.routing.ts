import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule),
        data: { breadcrumbs: { text: 'רשימת עובדים', textEnglish: 'Employees list' } },
      },
      // {
      //   path: 'roles',
      //   loadChildren: () => import('./roles/roles.module').then((m) => m.RolesModule),
      //   data: { breadcrumbs: { text: 'User roles' } }, // TODO: Change to Hebrew (?)
      // },
      {
        path: 'employee-information',
        loadChildren: () =>
          import('./employee-information/employee-information.module').then((m) => m.EmployeeInformationModule),
        data: { breadcrumbs: { text: 'עדכון פרטי עובדים', textEnglish: 'Employees Information' } },
      },
      // {
      //   path: 'general-tables',
      //   loadChildren: () => import('./general-tables/general-tables.module').then((m) => m.GeneralTablesModule),
      //   data: { breadcrumbs: { text: 'טבלאות כלליות', textEnglish: 'General tables' } },
      // },
      // {
      //   path: 'system-user',
      //   loadChildren: () => import('./system-user/system-user.module').then((m) => m.SystemUserModule),
      //   data: { breadcrumbs: { text: 'משתמשי המערכת', textEnglish: 'System users' } },
      // },
    ],
  },
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
