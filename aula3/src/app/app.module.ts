import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// Using library Http to use API
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiRestConnectionComponent } from './api-rest-connection/api-rest-connection.component';
import { EditaUserComponent } from './edita-user/edita-user.component';
import { ExcluirUserComponent } from './excluir-user/excluir-user.component';

const navigateRoutes: Routes = [
  {path: 'api-rest', component: ApiRestConnectionComponent},
  {path: 'listarOne', component: EditaUserComponent},
  {path: 'excluir', component: ExcluirUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ApiRestConnectionComponent,
    EditaUserComponent,
    ExcluirUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(navigateRoutes, {enableTracing: true})
  ],
  schemas: [ ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
