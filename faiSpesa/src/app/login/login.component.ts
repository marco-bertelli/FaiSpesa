import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private listaUtenti: LoginServiceService,private router: Router) {
   }

  ngOnInit(): void {
  }

  login(username:string, password:string){
    
    this.listaUtenti.eseguiLogin(username,password);
    
  }

  loginS(username:string, password:string){
    //nei pulsanti/altro metodo
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('password', password);

    this.listaUtenti.eseguiLoginS();
  }

}
