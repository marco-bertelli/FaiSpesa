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
  
  newSpesa:FormGroup;
  modifica:boolean;
  prodotti;
  
  constructor(private listService:ListServiceService,private router: Router,private fb: FormBuilder) {
    this.lista=listService.getLista();

    this.newSpesa=this.fb.group({
      nome:'',
      prodotti:  this.fb.array([
        new FormGroup({
          id: new FormControl(''),
          nome: new FormControl('')
        })
      ]),
      username:'',
      
    });
    this.prodotti = this.newSpesa.get('prodotti') as FormArray;
   }
  
  ngOnInit(): void {
    this.modifica=false;
  }

  apriD(id){
    this.router.navigate(['/dettaglio',id]);
  }
  
  //metodo per creare
  onSubmit(form){
    
    this.listService.modifica(form);
  
  }
  aggiungiP(element){
    
    this.prodotti.push(new FormGroup({
      id: new FormControl(element.id),
      nome: new FormControl(element.nome)
    }));
  
}
  //riempie la form con valori di baseee
  riempiForm(nome){
    this.modifica=true;
    let temp:List=this.listService.getSingolo(nome);
    //modifica la form con i valori
    this.newSpesa=this.fb.group({
      nome:temp.nome,
      prodotti:this.fb.array([
        
      ]),
      username:sessionStorage.getItem('user'),
      
    });
    //aggiorna in tempo reale i prodotti presenti
    this.prodotti = this.newSpesa.get('prodotti') as FormArray;

    //for per riempire i prodotti
  for(let i=0;i<=temp.prodotti.length;i++){
    this.aggiungiP(temp.prodotti.pop());
    
  }
  //toglie la form
  this.modifica=false;
  //avvisa l'utente della modifica
  console.log("modifica effettuata");
 }


}
