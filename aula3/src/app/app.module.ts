import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnectApiRestComponent } from './connect-api-rest/connect-api-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectApiRestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
