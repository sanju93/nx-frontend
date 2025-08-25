import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  viewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';

import { MatControlValueAccessorDirective } from '../core/directive/control-value-accessor.directive';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';

import { FormFieldComponent } from '../form-field/form-field.component';

let fieldId = 0;
@Component({
  selector: 'mat-text-area',
  imports: [
    ReactiveFormsModule,
    TextFieldModule,
    MatInputModule,
    FormFieldComponent
],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatTextAreaComponent
  extends MatControlValueAccessorDirective<string>
  implements AfterViewInit
{
  id = `mat-text-area-field-${fieldId}`;
  autosize: Signal<CdkTextareaAutosize | undefined> = viewChild('autosize');
  cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.isRequired() && this.applyRequiredValidation();
  }

  applyRequiredValidation() {
    this.formControl.addValidators([Validators.required]);
  }

  handleOnModelChange(value: Event) {
    const _valueTarget = value.target as HTMLInputElement;
    this.onChange(_valueTarget.value);
    this.value.set(_valueTarget.value);

    this.onTouched();
    this.cdr.markForCheck();
  }
}
