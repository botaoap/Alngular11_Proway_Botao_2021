import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// Using library Http to use API
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiRestConnectionComponent } from './api-rest-connection/api-rest-connection.component';

const navigateRoutes: Routes = [
  {path: 'api-rest', component: ApiRestConnectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ApiRestConnectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(navigateRoutes)
  ],
  schemas: [ ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
