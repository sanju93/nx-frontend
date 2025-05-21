import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  Optional,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatControlValueAccessor } from '../core/directive/control-value-accessor.directive';
import { FormFieldComponent } from '../form-field/form-field.component';
import { FieldSize } from '../core/models/field-size';

@Component({
  selector: 'mat-input',
  imports: [CommonModule, FormsModule, MatInputModule, FormFieldComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent extends MatControlValueAccessor<string | number> {
  placeholder = input<string>('', {
    alias: 'placeholder',
  });
  type = input<string>('text', {
    alias: 'type',
  });

  size = input<FieldSize>(FieldSize.MID, {
    alias: 'size',
  });

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    super(ngControl);
  }

  handleModelChange(value: string | number) {
    this.onChange(value);
    this.onTouched();
    this.cdr.markForCheck();
  }
}
