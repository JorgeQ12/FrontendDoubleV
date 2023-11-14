import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaDTO } from 'src/app/Class/PersonaDTO';
import { Persona } from 'src/app/Interfaces/Persona';
import { ResultResponse } from 'src/app/Interfaces/ResultResponse';
import { TipoIdentificacion } from 'src/app/Interfaces/TipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class AddPersonServiceService {
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
