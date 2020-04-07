import { Injectable } from '@angular/core';
import { List } from 'src/app/models/list-interface';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private list:List[]=[
    {username:"marco",nome:"lista1",prodotti:["mele"],condivisioni:[]},
    {username:"carlo",nome:"lista2",prodotti:["banane"],condivisioni:[]},
  ]
  getLista(){
    return this.list;
  }
  getP(nome){
    this.list.forEach(element => {
      if(element.nome==nome) {
        console.log(element.prodotti);
        return element.prodotti;
      }
      else return null;
    });
  }

  constructor() { }
}
