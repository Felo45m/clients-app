import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { RouterModule } from '@angular/router';
import { ServicesPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';



@NgModule({
  declarations: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListaComponent

  ],
  imports: [
    CommonModule,
    ServicesPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
