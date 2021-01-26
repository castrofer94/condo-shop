import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {AuthChildGenericGuard} from './shared/guards/auth.child.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-usuario', loadChildren: './cadasto-usuario/cadasto-usuario.module#CadastoUsuarioModule'},
  {
    path: 'home',
    loadChildren: './modules/modules.module#ModulesModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGenericGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
