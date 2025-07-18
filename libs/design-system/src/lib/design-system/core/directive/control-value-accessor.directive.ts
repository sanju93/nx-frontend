import { Directive, inject, input, model, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
@Directive({
  selector: 'controlValueAcessorDirective',
})
export class MatControlValueAccessorDirective<T>
  implements ControlValueAccessor
{
  value = model<T>();
  isRequired = input<boolean>(false);

  isReadonly = input<boolean>(false);

  isDisabled = model<boolean>(false);

  hidden = input<boolean>(false);

  label = input<string>('');

  ngControl = inject(NgControl);

  formControl = new FormControl();

  protected onChange: (args?: T) => void = () => undefined;
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
      this.formControl.disable();
    } else {
      if (this.formControl.disabled) this.formControl.enable();
    }
    this.isDisabled.set(isDisabled);
  }
}
