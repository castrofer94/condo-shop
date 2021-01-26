import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth.guard';
import {AuthChildGenericGuard} from '../shared/guards/auth.child.guard';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {
    path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGenericGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}
