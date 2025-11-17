import { Injectable, OnInit, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../models/auth-config';
@Injectable()
export class OidcAuthService {
  oAuthService = inject(OAuthService);

  constructor() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    console.log('login');
    this.oAuthService.initCodeFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }
}
