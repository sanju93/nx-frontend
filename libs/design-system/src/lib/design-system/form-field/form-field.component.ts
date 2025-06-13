import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-field',
  imports: [CommonModule, MatFormFieldModule],
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

  constructor() {}

  ngOnInit() {}
}
