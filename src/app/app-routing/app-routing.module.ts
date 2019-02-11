import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './../componentes/listado/listado.component';
import { DetalleComponent } from './../componentes/detalle/detalle.component';
import { NuevaComponent } from './../nueva/nueva.component';
import { AuthGuard } from './../_guards/auth.guard';

const routes: Routes=[
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'home',component: ListadoComponent},
  {path:'detalle/:id',component:DetalleComponent, canActivate: [AuthGuard]},
  {path:'nueva',component:NuevaComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
