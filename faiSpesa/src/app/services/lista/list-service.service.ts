import { Injectable } from '@angular/core';
import { List } from 'src/app/models/list-interface';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private list:List[]=[
    {username:"marco",prodotti:[],condivisioni:[]},
    {username:"carlo",prodotti:[],condivisioni:[]},
  ]

  constructor() { }
}
