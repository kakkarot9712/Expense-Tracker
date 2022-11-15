import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      AppRoutingModule,
      // StoreModule.forRoot()
    ]),
    provideAnimations()
  ]
})
