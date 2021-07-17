import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiConnectionComponent } from './api-connection/api-connection.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ExcluirComponent } from './excluir/excluir.component';

const navRoutes: Routes = [
  {path: 'conecta-api', component: ApiConnectionComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'consultar', component: ConsultarComponent},
  {path: 'excluir', component: ExcluirComponent} 
]

@NgModule({
  declarations: [
    AppComponent, 
    ApiConnectionComponent, CadastrarComponent, ConsultarComponent, ExcluirComponent
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
