import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service'
import { ResponseProducto } from '../inventory/inventory-table-datasource';
import { DataTableComponent } from 'src/app/data-table/data-table.component';
import { SellService } from '../service/sell.service';
import { ResponseSellItem, ResponseSell } from '../sales-report/sales-report-table-datasource';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
  private listProducts: Array<ResponseProducto>;
  private listSell: DataTableComponent
  private name: string;
  
  constructor(private productService: ProductsService,private sellServices: SellService) { }

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
  aja(){
    this.listProducts=this.productService.carritoSendInfo()
    this.listProducts.forEach(obj => {
      this.model=obj.modeloDto,
      this.stock=obj.cantidad
      console.log(this.stock,this.model)
     });
  }
  sellerName(){
    this.name=localStorage.getItem("user");
  }
  dateKeyup(value: Date) {
    this.dateSell = value;
    
  }
  getModel(value: string){
    this.model=value;
    console.log(this.model)
  }
  getStock(value:number){
    this.stock=value;
    console.log(this.stock);
  }


  addSell(){
    let product: ResponseSell ={
      cantidadVendidosDto: this.stock,
      fechaVentaDto:this.dateSell,
      modeloDto:this.model,
      nombreSucursalDto:"providencia",
      vendedorDto:this.name
    }
    console.log(product)
    let obs=this.sellServices.sellSetInfo(product).subscribe(res =>{
      alert('Vendido')
    });
    
  }

 

}




