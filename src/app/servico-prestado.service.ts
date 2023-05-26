import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados'

  constructor(private http: HttpClient) { }

  save(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado)
  }

  search(name: string, month: number) : Observable<ServicoPrestadoBusca[]> {

    const httpParams = new HttpParams().set("nome", name).set("mes", month ? month.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();

    return this.http.get<any>(url);
  }
}
