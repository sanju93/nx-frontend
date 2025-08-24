import { CanDeactivateFn } from '@angular/router';

export const dirtyCheckGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
