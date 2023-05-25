import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from '../../clients.service'
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-services-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit{

  clients: Client[] = []
  servico: ServicoPrestado;

  constructor(private clientService: ClientsService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( response => this.clients = response);
  }

  onSubmit() {
    console.log(this.servico)
  }

}
