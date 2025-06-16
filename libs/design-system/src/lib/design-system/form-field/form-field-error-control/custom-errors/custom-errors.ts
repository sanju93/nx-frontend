import { InjectionToken } from '@angular/core';

export const CUSTOM_ERRORS = new InjectionToken('FormControlErrors');

export const errors: Record<string, any> = {
  required: () => 'Field is Required',
  email: () => 'Please input a correct email address',
};
