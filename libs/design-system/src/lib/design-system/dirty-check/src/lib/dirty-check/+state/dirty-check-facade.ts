import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, take } from 'rxjs';
import * as DirtyCheckFacadeActions from './dirty-check-actions';

@Injectable()
export class DirtyCheckFacade {
  store = inject(Store);
  destroyRef = inject(DestroyRef);

  listenForInitialValue(
    initialValue: Record<string, any>,
    source$: Observable<Record<string, any>>
  ) {
    this.initState(initialValue);

    //listen for form Changes
    source$
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200))
      .subscribe((value) => {
        this.updateState(value);
      });
  }

  initState(initialValue: Record<string, any>) {
    return this.store.dispatch(
      DirtyCheckFacadeActions.initState({ initialValue })
    );
  }

  updateState(value: Record<string, any>) {
    return this.store.dispatch(
      DirtyCheckFacadeActions.updateState({ updatedState: value })
    );
  }
}
