import { InjectionToken } from '@angular/core';

export const CUSTOM_ERRORS = new InjectionToken('FormControlErrors');

export const errors: Record<string, ([...args]) => string> = {
  required: () => 'Field is Required',
};
