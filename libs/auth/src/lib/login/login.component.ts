import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent, FieldSize } from '@design-system';

@Component({
  selector: 'auth-login',
  imports: [CommonModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class AuthLoginComponent {
  size = FieldSize;
}
