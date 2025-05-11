import { Route } from '@angular/router';
import { SharedComponent } from '@frontend-chat/Shared';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@frontend-chat/Shared').then((c) => c.SharedComponent),
  },
];
