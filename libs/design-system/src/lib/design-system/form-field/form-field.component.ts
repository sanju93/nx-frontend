import { Component, input, Injector, Inject } from '@angular/core';
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
export class FormFieldComponent {
  label = input<string>('', {
    alias: 'label',
  });

  isRequired = input<boolean>(false, {
    alias: 'isRequired',
  });

  isDisabled = input<boolean>(false, {
    alias: 'isDisabled',
  });

  isReadonly = input<boolean>(false, {
    alias: 'isReadonly',
  });

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
