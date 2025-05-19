import { Directive, input, Input, model, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
@Directive({
  selector: 'mat-control-value-accessor',
})
export class MatControlValueAccessor<T> implements ControlValueAccessor {
  @Input() set value(value: T) {
    this._value = value;
  }
  required = input<boolean>(false, {
    alias: 'required',
  });

  readonly = input<boolean>(false, {
    alias: 'readonly',
  });

  disabled = model<boolean>(false, {
    alias: 'disabled',
  });

  hidden = input<boolean>(false, {
    alias: 'hidden',
  });

  protected _value!: T;

  protected onChange = (value: T) => {};
  protected onTouched = () => {};

  get value(): T {
    return this._value;
  }

  constructor(@Self() @Optional() ngControl: NgControl) {
    if (ngControl) ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
