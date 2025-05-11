import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './Shared.component.html',
  styleUrl: './Shared.component.css',
})
export class SharedComponent {}
