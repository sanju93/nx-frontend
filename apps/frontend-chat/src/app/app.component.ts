import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { InputComponent } from '@design-system';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldSize } from '@design-system';

@Component({
  imports: [RouterModule, FormlyModule, ReactiveFormsModule, InputComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-chat';

  size = FieldSize;

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });
  model = { name: 'sanjay' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter the name ',
        required: true,
      },
    },
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.controls);
  }
}
