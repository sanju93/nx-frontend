import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  input,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CUSTOM_ERRORS, errors } from './custom-errors/custom-errors';
import { debounceTime, pipe, Subject, takeUntil } from 'rxjs';
import { FormFieldErrorMessageComponent } from './form-field-error-message/form-field-error-message.component';

@Component({
  selector: 'mat-form-field-error-control',
  templateUrl: './form-field-error-control.component.html',
  styleUrls: ['./form-field-error-control.component.scss'],
  imports: [FormFieldErrorMessageComponent],
  providers: [
    {
      provide: CUSTOM_ERRORS,
      useValue: errors,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldErrorControlComponent {
  errorMessagesMap = input<Record<string, any>>();
  errorFormControl = input<AbstractControl | null>();
  private _errorFormControl!: AbstractControl | null;

  errorMessages: string[] = [];

  unsubscribe$ = new Subject<void>();

  get inValid(): boolean {
    return (
      (this._errorFormControl &&
        this._errorFormControl.touched &&
        this._errorFormControl.invalid) ??
      false
    );
  }
  constructor(
    @Inject(CUSTOM_ERRORS) private errors: Record<string, () => string>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._errorFormControl = this.errorFormControl() ?? null;
    this.listenForFormControlStatus();
  }

  listenForFormControlStatus() {
    this._errorFormControl?.statusChanges
      ?.pipe(debounceTime(200), takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.getErrors();
      });
  }

  getErrors() {
    if (!this._errorFormControl) return;
    const controlErrors: ValidationErrors | null =
      this._errorFormControl.errors;

    if (controlErrors) {
      if (this.inValid) {
        const firstKey = Object.keys(controlErrors)[0];
        const errorMap = this.getErrorMessage(firstKey);

        this.errorMessages = [
          errorMap ? errorMap(controlErrors[firstKey]) : 'Unexpected Error',
        ];
        console.log(this.errorMessages);
      } else {
        this.errorMessages = [];
      }
    } else {
      this.errorMessages = [];
    }

    this.cdr.markForCheck();
  }

  getErrorMessage(key: string) {
    if (this.errorMessagesMap()) {
      const messageMap = this.errorMessagesMap();
      return messageMap && messageMap[key];
    } else {
      return this.errors[key];
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
