import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import {LoadingModule} from 'ngx-loading';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterModule,
    NgxMaskModule,
    LoadingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
