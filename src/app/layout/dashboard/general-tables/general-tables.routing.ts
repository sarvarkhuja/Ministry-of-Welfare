import { PermissionGuard } from './../../../core/guards/permission.guard';
import { PermissionName } from './../components/menu/permission-name.enum';
import { GeneralTablesComponent } from './components/general-tables/general-tables.component';
import { Routes, RouterModule } from '@angular/router';

const ROLES_ROUTES: Routes = [
  {
    path: '',
    component: GeneralTablesComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [PermissionName.ROLES] },
  }
];
export const RolesRoutes = RouterModule.forChild(ROLES_ROUTES);
