import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from '@frontend-chat/libs/shared';

@Component({
  selector: 'shell-component',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.ts',
  imports: [CommonModule, AppShellComponent],
})
export class ShellComponent {}
