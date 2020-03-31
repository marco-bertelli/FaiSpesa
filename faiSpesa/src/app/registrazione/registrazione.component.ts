import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private listaUtenti: LoginServiceService,private router: Router) { }

  ngOnInit(): void {
  }
registra(username:string,password:string){
  this.listaUtenti.registra(username,password);

}
}
