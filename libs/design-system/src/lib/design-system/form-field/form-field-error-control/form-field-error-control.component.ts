import { Component, Inject, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CUSTOM_ERRORS, errors } from './custom-errors/custom-errors';

@Component({
  selector: 'mat-form-field-error-control',
  templateUrl: './form-field-error-control.component.html',
  styleUrls: ['./form-field-error-control.component.scss'],
  providers: [
    {
      provide: CUSTOM_ERRORS,
      useValue: errors,
    },
  ],
})
export class FormFieldErrorControlComponent {
  errorMessagesMap = input<Record<string, () => string>>();
  errorFormControl = input<AbstractControl | null>();
  private _errorFormControl!: AbstractControl | null;
  constructor(
    @Inject(CUSTOM_ERRORS) private errors: Record<string, () => string>
  ) {
    console.log(this.errors);
  }

  ngOnInit() {
    this._errorFormControl = this.errorFormControl() ?? null;
    this.listenForFormControlStatus();
  }

  listenForFormControlStatus() {
    this._errorFormControl?.statusChanges?.subscribe((status) => {
      console.log(status);
    });
  }
}
