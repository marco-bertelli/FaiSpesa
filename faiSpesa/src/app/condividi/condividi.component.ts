import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { Router } from '@angular/router';
import { List } from '../models/list-interface';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-condividi',
  templateUrl: './condividi.component.html',
  styleUrls: ['./condividi.component.css']
})
export class CondividiComponent implements OnInit {
  lista:List[];
  utente=sessionStorage.getItem('user');

  constructor(private listService:ListServiceService,private router: Router,private loginService:LoginServiceService) {
    this.lista=listService.getLista();
   }
  //metodo condivisione
condividi(nomeLista,nome:string){
  let presente=this.loginService.controlloUtente(nome);
  if(presente){
     this.listService.aggiungiCondivisione(nomeLista,nome);
     window.alert("condivisione con "+nome+" effettuata");
  }
  else console.log("utente non trovato");
}
  ngOnInit(): void {
  }

}
