import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { AngularTemplateComponent } from './angular-template/angular-template.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes=[
  {path: 'angularIfElse', component:AngularTemplateComponent},
  {path: 'angularLoopFor', component:ConsultaComponent},
  {path: 'angularForm', component:CadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AngularTemplateComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    // Import FormsModule to use in cadastro.component.html form
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
