import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '933369925072-4oon43omccrm7jnsgso3rr7hjav66j9c.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/auth-callback',
  responseType: 'code',
  scope: 'openid email profile',
  strictDiscoveryDocumentValidation: false,
};
