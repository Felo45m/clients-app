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
  success: boolean = false;
  errors: String[]

  constructor( private service: ClientsService ) {
    this.client = new Client();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service
        .saveClient(this.client)
        .subscribe( response => {
          this.success = true;
        })
  }
}
