import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';
import { Prodotto } from '../models/prodotto-interface';
import { FormArray,FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  prodotti;
  
    


  constructor(private listService:ListServiceService,private router: Router,private fb: FormBuilder) {
    this.lista=listService.getLista();

    this.newSpesa=this.fb.group({
      nome:'',
      prodotti: this.fb.array([
        new FormGroup({
          id: new FormControl(''),
          nome: new FormControl('')
        })
      ]),
      username:sessionStorage.getItem('user'),
      
    });
    this.prodotti = this.newSpesa.get('prodotti') as FormArray;
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
    
    this.listService.add(primiValori);

    this.lista=this.listService.getLista();
  }
  aggiungiP(){
    
      this.prodotti.push(new FormGroup({
        id: new FormControl(''),
        nome: new FormControl('')
      }));
    
  }


}
