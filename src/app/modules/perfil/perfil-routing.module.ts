import {NgModule} from '@angular/core';
import {PerfilComponent} from './perfil.component';
import {RouterModule, Routes} from '@angular/router';
import {SolicitacaoCadastroCondominioComponent} from './solicitacao-cadastro-condominio/solicitacao-cadastro-condominio.component';

const routes: Routes = [
  {path: '', component: PerfilComponent},
  {
    path: 'solicitacao-cadastro-condominio',
    component: SolicitacaoCadastroCondominioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule {
}
