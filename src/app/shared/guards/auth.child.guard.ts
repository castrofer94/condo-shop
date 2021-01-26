import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGenericGuard implements CanActivateChild {

  constructor(private auth: AuthService, private router: Router) {
  }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.auth.usuario) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
