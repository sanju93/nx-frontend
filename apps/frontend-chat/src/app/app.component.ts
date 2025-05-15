import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { TextareaComponent } from '@frontend-chat/textarea';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  imports: [RouterModule, FormlyModule, ReactiveFormsModule, TextareaComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-chat';

  form = new FormGroup({});
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
