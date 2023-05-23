import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private service: ClientsService) {

  }

  ngOnInit(): void {
    this.clients = this.service.getClients();
  }

}