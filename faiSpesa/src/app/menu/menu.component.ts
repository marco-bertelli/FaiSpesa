import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loggato():boolean{
  if(sessionStorage.getItem('user')!=null)return false;
  else return true;
}
logout(){
  if(sessionStorage.getItem('user')!=null)return true;
  else return false;
}
}
