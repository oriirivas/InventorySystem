import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
import { ResponseProducto } from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
  listProducts: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.listProducts = this.productService.listaSale;
    console.log("QQQQQQQQQQQ" + this.productService.listaSale)
  }
  add(){
    alert('Producto Vendido')
  }

  headers = ["ID", "Marca", "Modelo", "Stock", "Total"];

}




