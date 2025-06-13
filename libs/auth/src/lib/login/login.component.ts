import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent, FieldSize } from '@design-system';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'auth-login',
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class AuthLoginComponent {
  size = FieldSize;
  form = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),

    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor() {}

  ngAfterViewInit() {}
}
