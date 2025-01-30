import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {CategoryEffects} from './store/effects/category.effects';
import {categoryReducer} from './store/reducers/category.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideRouter(routes),
    provideStore(),
    provideState('categories', categoryReducer),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};
