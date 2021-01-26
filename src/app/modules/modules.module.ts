import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import {LoadingModule} from 'ngx-loading';
import {ModulesRoutingModule} from './modules-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    RouterModule,
    NgxMaskModule,
    LoadingModule
  ],
  exports: []
})
export class ModulesModule {
}
