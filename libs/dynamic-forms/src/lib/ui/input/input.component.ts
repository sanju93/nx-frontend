import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from '@design-system';
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
} from '@ngx-formly/core';

@Component({
  imports: [InputComponent, ReactiveFormsModule],
  selector: 'dynamic-input-component',
  template: `
    <mat-input
      [formControl]="formControl"
      [label]="props.label ?? ''"
      [isRequired]="props.required ?? false"
    ></mat-input>
  `,
})
export class DynamicFormInputComponent extends FieldType<FieldTypeConfig> {}
