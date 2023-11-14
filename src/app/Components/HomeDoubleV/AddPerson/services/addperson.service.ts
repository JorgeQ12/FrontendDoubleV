import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaDTO } from 'src/app/class/personaDTO';
import { Persona } from 'src/app/interfaces/persona';
import { ResultResponse } from 'src/app/interfaces/resultresponse';
import { TipoIdentificacion } from 'src/app/interfaces/tipoidentificacion';

@Injectable({
  providedIn: 'root'
})
export class AddPersonService {
  private UrlBack = "https://localhost:44359/"
  private apiBack = "api/DoubleV/";

  constructor(private http: HttpClient) { }

  InsertPerson(person: PersonaDTO): Observable<ResultResponse<Persona>> {
    return this.http.post<ResultResponse<Persona>>(this.UrlBack + this.apiBack + 'InsertPerson', person);
  }

  GetTypeDocument(): Observable<ResultResponse<Array<TipoIdentificacion>>> {
    return this.http.get<ResultResponse<Array<TipoIdentificacion>>>(this.UrlBack + this.apiBack + 'GetTypeDocument');
  }
}
