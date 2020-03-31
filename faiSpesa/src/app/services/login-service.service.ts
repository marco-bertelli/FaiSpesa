import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  private gameList:User[]=[
    {username:"marco",password:"prosciutto",admin:true},
    {username:"carlo",password:"negro",admin:false},
  ]
  
  constructor(private router: Router){

  }

  accesso(username:string,password:string):boolean{

    let controllo=false;
    
    this.gameList.forEach(element => {
      if(element.username===username && element.password===password){
        //gestione admin
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
        
        controllo=true;
      }
    });
    
    return controllo;  
  }

  eseguiLogin(username:string,password:string){

    if(this.accesso(username,password)){
      //se giusto memorizza con pass
      sessionStorage.setItem('user', username);

      this.router.navigateByUrl("/home");
    }
    else console.log("non funzionante")
  }
  //con sessioni
  eseguiLoginS(){
   let username=sessionStorage.getItem('user');
   let password=sessionStorage.getItem('password');
    
    if(this.accesso(username,password)){
      this.router.navigateByUrl("/home");
    }
  }

 
}
