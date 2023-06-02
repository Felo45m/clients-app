import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  clientSelected: Client;
  successMessage: string;
  errorMessage: string;

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.service
        .getClients()
        .subscribe( response => this.clients = response);
  }

  newRegister() {
    this.router.navigate(['/clients-forms'])
  }

  deleteConfirmation(client : Client) {
    this.clientSelected = client;
  }

  deleteClient() {
    this.service
        .deleteClient(this.clientSelected)
        .subscribe(
          response => { this.successMessage = 'Cliente deletado com sucesso!',
          this.ngOnInit();
        },
          error => this.errorMessage = 'Ocorreu um erro ao deletar o cliente.'
        )
  }

}
