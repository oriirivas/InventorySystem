import { Router } from '@angular/router';
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from './data-table-datasource';
import {ProductsService} from '../componets/service/products.service'
import { ResponseProducto, InventoryTableItem } from '../componets/inventory/inventory-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  
  
  public listaSale:Array<ResponseProducto>;
  productoActual:ResponseProducto;
  stock:number=1;
  id:number;
  totalVenta:number;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<DataTableItem>;
 
  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioVentaDto', 'cantidadDto', 'sale'];
  
  //listProducts: InventoryTableItem[];
  //listaCarrito: ResponseProducto [];
  idActual: number;
  //litaSource:MatTableDataSource<ResponseProducto>;
  constructor(private productService:ProductsService, private router:Router) { }
  
  ngOnInit() { 

    this.productService.showProduct().subscribe(res=>{

      this.dataSourcex = new MatTableDataSource<DataTableItem>( res );
      this.dataSourcex.paginator = this.paginator;
      this.dataSourcex.sort = this.sort;

      //this.dataSource.connect();
      console.log(res);
      //this.tableInfo=res;
    }); 
    
  }

  ngAfterViewInit() {
  }
/*
  mostrarProducto(){
    let obs = this.productService.showProduct();
    obs.subscribe(res => {
      this.listProducts=res;
      console.log(this.listProducts);
      this.litaSource.paginator = this.paginator;
      this.litaSource.sort = this.sort;

   });
  }
*/
  applyFilter(filterValue: string) {
    this.dataSourcex.filter = filterValue.trim().toLowerCase();    
}
newStock(value: number){
  this.stock=value;

}

getPrice(vaule: number){
  this.idActual= vaule;
  
}

total(){
  let total = (this.stock*this.idActual);
  this.totalVenta=total;
  this.productoActual.total=this.totalVenta
  this.productoActual.cantidad=this.stock
  console.log(this.productoActual.cantidad,this.totalVenta);
  return this.productoActual;
}

add(value: ResponseProducto){
  
  
  
  this.productoActual=value;
  //this.listaCarrito.push(value);
  console.log(this.productoActual);
  
  //this.productService.carritoGetInfo(value);

  //this.productService.

  /*if(this.id ==null || this.stock == undefined){
    alert("debe llenar todo los campos")
  }else{
    this.listaSale.push(value);
    this.productService.getProduct(this.id);
    console.log(this.listaSale);

  }*/
}

sendIfonCarrito(){
  
  this.productService.carritoGetInfo(this.productoActual);
  console.log(this.productoActual);
  alert('agregado al carrito');
  
  
}

}

    


