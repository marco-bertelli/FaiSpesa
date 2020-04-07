import { Injectable } from '@angular/core';
import { List } from 'src/app/models/list-interface';
import { Prodotto } from 'src/app/models/prodotto-interface';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private list:List[]=[
    //1
    {username:"marco",nome:"lista1",prodotti:[
      {id:1,nome:"mele"},
      {id:2,nome:"pere"}
    ],condivisioni:[]},
    //2
    {username:"carlo",nome:"lista2",prodotti:[
      {id:2,nome:"banane"}
    ],condivisioni:[]},
  ]
  getLista(){
    return this.list;
  }
  getP(nome):Prodotto{
    this.list.forEach(element => {
      if(element.nome==nome) {
        console.log(element.prodotti);
        return element.prodotti;
      }
      else return element.prodotti;
    });
    return null;
  }

  getSingolo(nome){
    return this.list.find(item=>{
      return item.nome === nome;
    })
  }

  constructor() { }
}
