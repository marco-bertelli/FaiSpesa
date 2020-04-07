import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';
import { Prodotto } from '../models/prodotto-interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  utente=sessionStorage.getItem('user');
  lista:List[];

  constructor(private listService:ListServiceService) {
    this.lista=listService.getLista();
   }

  ngOnInit(): void {
  }
  

}
