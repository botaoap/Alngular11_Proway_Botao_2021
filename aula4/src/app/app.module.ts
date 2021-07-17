import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiConnectionComponent } from './api-connection/api-connection.component';

const navRoutes: Routes = [
  {path: 'conecta-api', component: ApiConnectionComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    ApiConnectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    // forRoot faz funcionar as Rotas
    RouterModule.forRoot(
      navRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
