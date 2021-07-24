import { Routes, RouterModule} from '@angular/router';
import { SystemUserComponent } from './components/system-user/system-user.component';

const SYSTEM_USER_ROUTES: Routes = [{
  path: '',
  component: SystemUserComponent
}];

export const SystemUserRoutes = RouterModule.forChild(SYSTEM_USER_ROUTES);

