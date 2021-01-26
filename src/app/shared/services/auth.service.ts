import {Injectable} from '@angular/core';
import {Usuario} from '../models/usuario.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  usuario: Usuario;
  usuarioObservable = new BehaviorSubject(this.usuario);
  usuarioObs = this.usuarioObservable.asObservable();
}
