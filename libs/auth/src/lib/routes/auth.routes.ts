import { Route } from '@angular/router';
import { AppAuthShellComponent } from '../shell/shell.component';
import { AuthLoginComponent } from '../login/login.component';
import { AuthSignupComponent } from '../signup/signup.component';
import { AuthCallbackComponent } from '../components/auth-callback/auth-callback.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { OidcAuthService } from '../services/oidc-auth.service';
import { OAuthGuard } from '../guards/oauth.guard';
export const routes: Route[] = [
  {
    path: '',
    component: AppAuthShellComponent,
    canActivate: [OAuthGuard],
    providers: [provideOAuthClient(), OidcAuthService, OAuthGuard],

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

      {
        path: 'auth-callback',
        component: AuthCallbackComponent,
      },
    ],
  },
];
