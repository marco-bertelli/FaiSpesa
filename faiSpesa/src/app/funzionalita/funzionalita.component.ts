import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funzionalita',
  templateUrl: './funzionalita.component.html',
  styleUrls: ['./funzionalita.component.css']
})
export class FunzionalitaComponent implements OnInit {

  utente:string;

  constructor() { 
    this.utente=sessionStorage.getItem('user');
  }

  ngOnInit(): void {
  }

}
