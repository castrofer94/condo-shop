import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Error, ResponseModel} from '../../app.api';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(private http: HttpClient) {
  }

  public buscaTodasUf(): Observable<any> {
    return this.http.get<ResponseModel>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').pipe(
      catchError(Error.error)
    );
  }

  public buscaMunicipioUf(uf: string): Observable<any> {
    return this.http.get<ResponseModel>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).pipe(
      catchError(Error.error)
    );
  }
}
