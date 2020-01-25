import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
import { ResponseProducto } from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
  private listProducts: Array<ResponseProducto>;
  private name: string;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.prductSale();
    this.sellerName();
    console.log("QQQQQQQQQQQ" + this.productService.carritoSendInfo())
  }
  add(){
    alert('Producto Vendido')
  }

  prductSale(){
    this.listProducts=this.productService.carritoSendInfo()
         
  }
  sellerName(){
    this.name=localStorage.getItem("user");
  }

 

}




