import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from './interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private urlApi = "https://paises-america.gqrlab.com/api/v1/paises";

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.urlApi);
  }
}