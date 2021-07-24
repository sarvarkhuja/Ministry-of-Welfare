import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthComponent } from './components/auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent,
      },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(AUTH_ROUTES);
