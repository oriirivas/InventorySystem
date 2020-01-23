import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
import { ResponseProducto } from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
  listProducts: Array<ResponseProducto>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.prductSale();
    console.log("QQQQQQQQQQQ" + this.productService.saleProduct())
  }
  add(){
    alert('Producto Vendido')
  }

  prductSale(){
    let obs= this.productService.saleProduct();
    obs.subscribe(res=> {
      console.log(res);
      this.listProducts=res;
      console.log(this.listProducts);
    });
     
  }

  //headers = ["idProductoDto", "marcaDto", "modeloDto", "cantidadDto", "Total"];

}




