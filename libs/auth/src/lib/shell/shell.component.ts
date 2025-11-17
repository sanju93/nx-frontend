import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OidcAuthService } from '../services/oidc-auth.service';

@Component({
  selector: 'app-auth',
  styleUrl: './shell.component.scss',
  templateUrl: './shell.component.html',
  imports: [RouterOutlet],
})
export class AppAuthShellComponent {}
