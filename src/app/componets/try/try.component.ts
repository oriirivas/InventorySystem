import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../componets/service/products.service';
import { observable } from 'rxjs';
import { ResponseDtoMarca } from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css'],
})

export class TryComponent implements OnInit {
  public lista: ResponseDtoMarca[];
  //marca:ResponseDtoMarca;
  marca:ResponseDtoMarca;
  marcaLocal: ResponseDtoMarca;



  

  constructor(private productServices: ProductsService) { }

  ngOnInit() {
    this.listarMarca();
      
  }
 
  listarMarca(){
   let obs= this.productServices.listMark();
   obs.subscribe(res=> {
     this.lista=res;
     console.log(this.lista);
   });
   
  }

  

  
  getMarca(){
    debugger
    console.log(this.marcaLocal,this.marca)
  }
}