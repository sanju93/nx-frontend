import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { OidcAuthService } from '../services/oidc-auth.service';
import { Observable, of, iif, tap, map } from 'rxjs';

@Injectable()
export class OAuthGuard implements CanActivate {
  oAuthService = inject(OidcAuthService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return of(this.oAuthService.oAuthService.hasValidAccessToken()).pipe(
      tap((res) => {
        if (res) {
          return true;
        } else {
          this.oAuthService.login();
          return false;
        }
      }),
      map((res) => res)
    );
  }
}
