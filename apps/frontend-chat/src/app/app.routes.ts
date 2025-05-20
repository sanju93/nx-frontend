import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@frontend-chat/libs/feature').then((m) => m.routes),
  },
];
