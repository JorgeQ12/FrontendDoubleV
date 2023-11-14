import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioDTO } from 'src/app/class/usuarioDTO';
import { ResultResponse } from 'src/app/interfaces/resultresponse';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private UrlBack = "https://localhost:44359/"
  private apiBack = "api/DoubleV/";

  constructor(private http: HttpClient) { }

  GetLoginUser(usuario: UsuarioDTO): Observable<ResultResponse<Usuario>> {
    return this.http.post<ResultResponse<Usuario>>(this.UrlBack + this.apiBack + 'GetLoginUser', usuario);
  }
}
