import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-callback',
  templateUrl: './auth-callback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthCallbackComponent {}
