import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastoUsuarioComponent} from './cadasto-usuario.component';

const routes: Routes = [
  {path: '', component: CadastoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastoUsuarioRoutingModule {
}
