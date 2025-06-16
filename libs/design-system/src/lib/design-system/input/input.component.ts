import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  Optional,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatControlValueAccessorDirective } from '../core/directive/control-value-accessor.directive';
import { FormFieldComponent } from '../form-field/form-field.component';
import { FieldSize } from '../core/models/field-size';
let fieldId = 0;
@Component({
  selector: 'mat-input',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormFieldComponent,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[hidden]': 'hidden()',
  },
})
export class InputComponent
  extends MatControlValueAccessorDirective<string | number>
  implements AfterViewInit
{
  id = `mat-input-field-${fieldId++}`;
  placeholder = input<string>('');
  type = input<string>('text');

  size = input<FieldSize>(FieldSize.MID);

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    super(ngControl);
  }

  ngAfterViewInit(): void {
    if (this.isRequired()) {
      this.ApplyRequiredValidation();
    }

    if (this.type() === 'email') {
      this.ApplyEmailValidation();
    }
  }

  ApplyRequiredValidation() {
    this.FormControl.addValidators([Validators.required]);
  }

  ApplyEmailValidation() {
    this.FormControl.addValidators([Validators.email]);
  }

  handleModelChange(value: Event) {
    const _valueTarget = value.target as HTMLInputElement;
    this.onChange(_valueTarget.value);
    this.value.set(_valueTarget.value);

    this.onTouched();
    this.cdr.markForCheck();
  }
}
