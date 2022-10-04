import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared/shared.service';
import { LabelProvider } from './label-provider';

export function labelProviderFactory(provider: LabelProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    SharedService,
    LabelProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: labelProviderFactory,
      deps: [LabelProvider],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
