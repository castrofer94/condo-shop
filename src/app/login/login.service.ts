import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_BASE, Error, ResponseModel} from '../app.api';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(logar: string): Observable<any> {
    return this.http.get<ResponseModel>(`${API_BASE}/api-cadastro/v1/login/${logar}`).pipe(
      catchError(Error.error)
    );
  }
}
