import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  marca:string;
  id10:number;
  tradeMark10:string;
  model10:string;
  category10:string;
  buyPrice10:number;
  salePrice10:number;
  stock10:number;
  constructor() { }

  ngOnInit() {

    this.marca="jamon";
    
  }


}