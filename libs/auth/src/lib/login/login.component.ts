import { Component } from '@angular/core';

import {
  InputComponent,
  FieldSize,
  MatTextAreaComponent,
} from '@design-system';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicFormsGeneratorComponent } from '@frontend-chat/dynamic-forms';

@Component({
  selector: 'auth-login',
  imports: [ReactiveFormsModule, DynamicFormsGeneratorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class AuthLoginComponent {
  size = FieldSize;
  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'dyanmic input',
        required: true,
      },
    },
  ];
  model = {
    name: 'hello',
  };

  constructor() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
