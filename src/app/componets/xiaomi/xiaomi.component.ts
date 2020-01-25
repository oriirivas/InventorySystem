import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.component.html',
  styleUrls: ['./xiaomi.component.css']
})
export class XiaomiComponent implements OnInit {
  private name: string;
  constructor() { }

  ngOnInit() {
    this.nombre();
  }
  /** metodo que trae el nombre de vendedor desde el localStores */
  nombre(){
    this.name=localStorage.getItem("user");
  }
  /** metodo que borra todos los datos del localStore, lo estamos usando, al cerrar sesion */
  deleteLocalName(){
    localStorage.clear();
  }
  
}
