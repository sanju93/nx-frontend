import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputComponent,
  FieldSize,
  MatTextAreaComponent,
} from '@design-system';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicFormsGeneratorComponent } from '@frontend-chat/dynamic-forms';
import { AuthService } from './services/Auth.service';

@Component({
  selector: 'auth-login',
  imports: [CommonModule, ReactiveFormsModule, DynamicFormsGeneratorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService],
})
export class AuthLoginComponent {
  size = FieldSize;
  form = new UntypedFormGroup({});
  authService = inject(AuthService);

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        required: true,
      },
    },
  ];
  model = {
    name: 'hello',
  };

  handleSubmit(event: Event) {
    event.preventDefault();

    this.authService
      .login({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe();
  }

  handleNotes() {
    this.authService.getNotes().subscribe();
  }
}
