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

  getClient() : Client {
    let client : Client = new Client();
    client.name = "Felipe Melo";
    client.cpf = "051.409.234-32"
    return client
  }
}
