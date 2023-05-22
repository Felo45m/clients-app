import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from './clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient) {

  }

  getClient() : Client {
    let client : Client = new Client();
    client.name = "Felipe Melo";
    client.cpf = "051.409.234-32"
    return client
  }
}
