import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit{

  name: string;
  month: number;
  months: number[];
  lista: ServicoPrestadoBusca[];
  message: string | null;

  constructor(private service: ServicoPrestadoService) {
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
        .search(this.name, this.month)
        .subscribe(response => {
          this.lista = response;
          if(this.lista.length <= 0) {
            this.message = "Nenhum registro encontrado"
          } else {
            this.message = null;
          }

        })
  }
}
