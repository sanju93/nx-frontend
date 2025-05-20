import { Route } from '@angular/router';
import { ShellComponent } from '../shell.component';
import { AppDashboardComponent } from '../../dashboard/dashboard.component';

export const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AppDashboardComponent,
      },
    ],
  },
];
