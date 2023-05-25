import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from '../../clients.service'
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'

@Component({
  selector: 'app-services-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit{

  clients: Client[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(private clientService: ClientsService, private service: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( response => this.clients = response);
  }

  onSubmit() {
    this.service.save(this.servico).subscribe( response => {
      this.success = true;
      this.errors = [];
      this.servico = new ServicoPrestado();
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors
    })
  }

}
