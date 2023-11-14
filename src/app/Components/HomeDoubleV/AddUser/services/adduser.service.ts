import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/class/usuarioDTO';
import { ResultResponse } from 'src/app/interfaces/resultresponse';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private UrlBack = "https://localhost:44359/"
  private apiBack = "api/DoubleV/";

  constructor(private http: HttpClient) { }

  InsertUser(user: UsuarioDTO): Observable<ResultResponse<Usuario>> {
    return this.http.post<ResultResponse<Usuario>>(this.UrlBack + this.apiBack + 'InsertUser', user);
  }
}
