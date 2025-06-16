import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldSize } from '@design-system';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  imports: [RouterModule, FormlyModule, ReactiveFormsModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-chat';

  size = FieldSize;

  document = inject(DOCUMENT);

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
}
