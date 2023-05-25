import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from '../../clients.service'
import { Services } from '../services';


@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent implements OnInit{

  clients: Client[] = []
  service: Services;

  constructor(private clientService: ClientsService) {
    this.service = new Services();
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( response => this.clients = response);
  }

  onSubmit() {
    console.log(this.service)
  }

}
