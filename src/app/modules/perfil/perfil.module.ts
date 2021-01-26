import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import {LoadingModule} from 'ngx-loading';
import {PerfilRoutingModule} from './perfil-routing.module';
import { SolicitacaoCadastroCondominioComponent } from './solicitacao-cadastro-condominio/solicitacao-cadastro-condominio.component';

@NgModule({
  declarations: [PerfilComponent, SolicitacaoCadastroCondominioComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule,
    RouterModule,
    NgxMaskModule,
    LoadingModule
  ]
})
export class PerfilModule {
}
