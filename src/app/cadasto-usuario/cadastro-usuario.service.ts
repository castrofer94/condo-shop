import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE, Error, ResponseModel} from '../app.api';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Usuario} from '../shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) {
  }

  public novoUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<ResponseModel>(API_BASE + '/api-cadastro/v1/usuario', usuario).pipe(
      catchError(Error.error)
    );
  }

  public verificaDisponibilidadeEmail(email: string): Observable<any> {
    return this.http.get<ResponseModel>(`${API_BASE}/api-cadastro/v1/usuario/verificaDisponibilidade/${email}`).pipe(
      catchError(Error.error)
    );
  }
}
