import {
  Component,
  input,
  Injector,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { FormFieldErrorControlComponent } from './form-field-error-control/form-field-error-control.component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'form-field',
  imports: [CommonModule, MatFormFieldModule, FormFieldErrorControlComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements AfterViewInit {
  label = input<string>('');

  isRequired = input<boolean>(false);

  isDisabled = input<boolean>(false);

  isReadonly = input<boolean>(false);

  customFormControl = input<FormControl>();

  get isAstriskVisible(): boolean {
    return this.isRequired();
  }

  constructor(
    private injector: Injector,
    @Inject(NgControl) protected NgControl: NgControl
  ) {}

  ngAfterViewInit() {
    this.NgControl = this.injector.get(NgControl);
  }
}
