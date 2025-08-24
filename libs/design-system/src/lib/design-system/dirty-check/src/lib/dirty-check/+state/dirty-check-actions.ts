import { createAction, props } from '@ngrx/store';

const initState = createAction(
  'Dirty Check Facade init',
  props<{ initialValue: Record<string, any> }>()
);

const resetState = createAction('Dirty Check Facade reset');

const updateState = createAction(
  'Dirty Check Facade Update State',
  props<{ updatedState: Record<string, any> }>()
);

export { initState, resetState, updateState };
