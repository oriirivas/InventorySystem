import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../componets/service/products.service';
import { observable } from 'rxjs';
import { ResponseDtoMarca, ResponseProducto, InventoryTableItem } from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css'],
})

export class TryComponent implements OnInit {
  id=1;
  public lista: ResponseDtoMarca[];
  //marca:ResponseDtoMarca;
  marca:ResponseDtoMarca;
  marcaLocal: ResponseDtoMarca;

  //listProducts: Array<ResponseProducto>[];
  listProducts: ResponseProducto;
  //listProducts: InventoryTableItem[];


  

  constructor(private productServices: ProductsService) { }

  ngOnInit() {
    this.listarMarca();
    this.mostrarProducto();
  }
 
  listarMarca(){
   let obs= this.productServices.listMark();
   obs.subscribe(res=> {
     this.lista=res;
     console.log(this.lista);
   });
   
  } 

  mostrarProducto(){
    let obs = this.productServices.getProduct(this.id);
    //obs.subscribe(res => {
      //this.listProducts.push(res);
      console.log(this.listProducts);
   // })
  }
  
}