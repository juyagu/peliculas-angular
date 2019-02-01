import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactivoComponent } from './componentes/reactivo/reactivo.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivoComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
