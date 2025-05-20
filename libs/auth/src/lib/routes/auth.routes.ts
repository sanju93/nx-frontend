import { Route } from '@angular/router';
import { AppAuthShellComponent } from '../shell/shell.component';
import { AuthLoginComponent } from '../login/login.component';
import { AuthSignupComponent } from '../signup/signup.component';

export const routes: Route[] = [
  {
    path: '',
    component: AppAuthShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
    ],
  },
];
