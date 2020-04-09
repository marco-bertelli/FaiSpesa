import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';
import { Prodotto } from '../models/prodotto-interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  utente=sessionStorage.getItem('user');
  lista:List[];
  crea=false;
  newSpesa:FormGroup;


  constructor(private listService:ListServiceService,private router: Router,private fb: FormBuilder) {
    this.lista=listService.getLista();
    this.newSpesa=this.fb.group({
      username:sessionStorage.getItem('user'),
      nome:'',
    });
   }
  
  ngOnInit(): void {
  }

  apriD(id){
    this.router.navigate(['/dettaglio',id]);
  }
  //metodo per visualizzare la form
  visualizzaForm(){
    this.crea=true;
  }
  //metodo per creare
  onSubmit(primiValori){

  }


}
