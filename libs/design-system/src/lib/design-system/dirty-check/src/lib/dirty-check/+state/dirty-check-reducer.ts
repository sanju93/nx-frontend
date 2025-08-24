import { Action, createReducer, on } from '@ngrx/store';
import * as DirtyCheckActions from './dirty-check-actions';

export interface State {
  initialState: Record<string, any> | null;
  updatedState: Record<string, any> | null;
}

const initialState: State = {
  initialState: null,
  updatedState: null,
};

const dirtyCheckReducer = createReducer(
  initialState,
  on(DirtyCheckActions.initState, (state, action) => ({
    ...state,
    initialState: action.initialValue,
  }))
);

export function reducer(state: State, action: Action) {
  return dirtyCheckReducer(state, action);
}
