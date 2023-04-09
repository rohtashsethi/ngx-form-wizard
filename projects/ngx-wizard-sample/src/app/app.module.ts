import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxWizardModule } from '../../../ngx-wizard/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
