import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemContatosPageRoutingModule } from './listagem-contatos-routing.module';

import { ListagemContatosPage } from './listagem-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemContatosPageRoutingModule
  ],
  declarations: [ListagemContatosPage]
})
export class ListagemContatosPageModule {}
