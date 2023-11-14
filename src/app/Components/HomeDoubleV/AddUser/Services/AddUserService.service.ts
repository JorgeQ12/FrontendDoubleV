import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/Class/UsuarioDTO';
import { ResultResponse } from 'src/app/Interfaces/ResultResponse';
import { Usuario } from 'src/app/Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {
  private UrlBack = "https://localhost:44359/"
  private apiBack = "api/DoubleV/";

  constructor(private http: HttpClient) { }

  InsertUser(user: UsuarioDTO): Observable<ResultResponse<Usuario>> {
    return this.http.post<ResultResponse<Usuario>>(this.UrlBack + this.apiBack + 'InsertUser', user);
  }
}
