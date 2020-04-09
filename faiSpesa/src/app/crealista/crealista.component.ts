import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';
import { Prodotto } from '../models/prodotto-interface';
import { FormArray,FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crealista',
  templateUrl: './crealista.component.html',
  styleUrls: ['./crealista.component.css']
})
export class CrealistaComponent implements OnInit {

  utente=sessionStorage.getItem('user');
  lista:List[];
  
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
