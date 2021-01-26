import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastoUsuarioComponent} from './cadasto-usuario.component';
import {FormsModule} from '@angular/forms';
import {CadastoUsuarioRoutingModule} from './cadasto-usuario-routing.module';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import {LoadingModule} from 'ngx-loading';


@NgModule({
  declarations: [CadastoUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    CadastoUsuarioRoutingModule,
    RouterModule,
    NgxMaskModule,
    LoadingModule
  ],
  exports: [CadastoUsuarioComponent]
})
export class CadastoUsuarioModule {
}
