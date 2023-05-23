import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(private service: ClientsService, private router: Router) {
    this.client = new Client();
  }

  ngOnInit(): void {}

  backToList() {
    this.router.navigate(['/clients-list'])
  }

  onSubmit() {
    this.service
        .saveClient(this.client)
        .subscribe( response => {
          this.success = true;
          this.errors = [];
          this.client = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors
        }
        )
  }
}
