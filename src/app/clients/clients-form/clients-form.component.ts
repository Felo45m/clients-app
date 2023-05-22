import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientsService } from '../../clients.service'

@Component({
  selector: 'clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit{

  client: Client;

  constructor( private service: ClientsService ) {
    this.client = service.getClient();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.client)
  }
}
