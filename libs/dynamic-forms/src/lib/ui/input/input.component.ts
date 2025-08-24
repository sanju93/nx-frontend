import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@design-system';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  imports: [InputComponent, ReactiveFormsModule],
  selector: 'dynamic-input-component',
  template: `
    <mat-input
      [formControl]="formControl"
      [label]="props.label ?? ''"
    ></mat-input>
  `,
})
export class DynamicFormInputComponent extends FieldType<FormlyFieldConfig> {}
