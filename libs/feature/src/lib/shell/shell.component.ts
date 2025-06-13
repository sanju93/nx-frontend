import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from '@frontend-chat/libs/shared';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './Routes/shell-routes';

@Component({
  selector: 'feature-shell-component',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  imports: [CommonModule, AppShellComponent, RouterOutlet],
})
export class ShellComponent {}
