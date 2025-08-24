import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { DynamicFormInputComponent } from '@frontend-chat/dynamic-forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      BrowserAnimationsModule,
      FormlyModule.forRoot({
        types: [
          {
            name: 'input',
            component: DynamicFormInputComponent,
          },
        ],
      })
    ),
    provideRouter(appRoutes),
  ],
};
