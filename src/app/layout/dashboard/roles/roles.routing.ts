import { PermissionGuard } from './../../../core/guards/permission.guard';
import { PermissionName } from './../components/menu/permission-name.enum';
import { RolesComponent } from './components/roles/roles.component';
import { Routes, RouterModule } from '@angular/router';

const ROLES_ROUTES: Routes = [
  {
    path: '',
    component: RolesComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [PermissionName.ROLES] },
  }
];
export const RolesRoutes = RouterModule.forChild(ROLES_ROUTES);
