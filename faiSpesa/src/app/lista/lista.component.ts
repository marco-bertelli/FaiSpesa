import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';
import { Prodotto } from '../models/prodotto-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  utente=sessionStorage.getItem('user');
  lista:List[];

  constructor(private listService:ListServiceService,private router: Router) {
    this.lista=listService.getLista();
   }

  ngOnInit(): void {
  }
  apriD(id){
    this.router.navigate(['/dettaglio',id]);
  }

}
