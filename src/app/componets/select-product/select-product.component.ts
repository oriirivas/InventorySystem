import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
import { ResponseProducto, ResponseSell } from '../inventory/inventory-table-datasource';
import { DataTableComponent } from 'src/app/data-table/data-table.component';
import { SellService } from '../service/sell.service';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
  private listProducts: Array<ResponseProducto>;
  private listSell: Array<ResponseSell>;
  private name: string;
  
  constructor(private productService: ProductsService) { }

  private stock:number;
  public model:string;
  private dateSell: Date;

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
  dateKeyup(value: Date) {
    this.dateSell = value;
    
  }
  addSell(){
    let product: ResponseSell ={
      cantidadVendidosDto: 100,
      fechaVentaDto:this.dateSell,
      modeloDto:"s10",
      nombreSucursalDto:"providencia",
      vendedorDto:this.name
    }
    console.log(product)
    let obs=this.productService.sellGetInfo(product).subscribe(res =>{
      alert('aja')
    });
    
    //stock:number, date:Date, model:string, branchOffice: string, user:string
  }
  sendIfonCarrito(){
    
  }

 

}




