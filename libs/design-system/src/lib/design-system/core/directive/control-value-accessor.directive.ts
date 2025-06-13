import { Directive, input, model, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
@Directive({
  selector: 'mat-control-value-accessor',
})
export class MatControlValueAccessor<T> implements ControlValueAccessor {
  value = model<T>();
  isRequired = input<boolean>(false, {
    alias: 'isRequired',
  });

  isReadonly = input<boolean>(false, {
    alias: 'isReadonly',
  });

  isDisabled = model<boolean>(false, {
    alias: 'isDisabled',
  });

  hidden = input<boolean>(false, {
    alias: 'hidden',
  });

  label = input<string>('', {
    alias: 'label',
  });

  FormControl = new FormControl();

  protected onChange = (value: T) => {};
  protected onTouched = () => {};

  constructor(@Self() @Optional() ngControl: NgControl) {
    if (ngControl !== null) ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    this.value.set(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.FormControl.disable();
    } else {
      this.FormControl.disabled && this.FormControl.enable();
    }
    this.isDisabled.set(isDisabled);
  }
}
