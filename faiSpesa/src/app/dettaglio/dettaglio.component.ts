import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServiceService } from '../services/lista/list-service.service';
import { List } from '../models/list-interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  lista:List;
  constructor(private list:ListServiceService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.lista=this.list.getSingolo(params.get("id"));
      console.log(this.lista);
    })
  }

}
