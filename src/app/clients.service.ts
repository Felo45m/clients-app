import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from './clients/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient) {

  }

  saveClient( client: Client) : Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/clients', client)
  }

  /*
  getClients() : Observable<Client[]> {
    return ;
  }
  */

  getClients() : Client[] {
    let client = new Client();
    client.id = 1
    client.name = "felo"
    client.cpf = "05140923432"
    client.registrationDate = "23/04/2023"
    return [client]
  }
}
