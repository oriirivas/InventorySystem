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
  
  
  private productoActual:ResponseProducto;
  
  private howManyStock:number=1;
  
  private totalVenta:number;

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<DataTableItem>;
 
  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioVentaDto', 'cantidadDto', 'sale'];
  
  constructor(private productService:ProductsService, private router:Router) { }
  
  ngOnInit() { 
    
    this.infoTable();
  }

  ngAfterViewInit() {
  }

  infoTable(){
    /** trae los productos desde la base de datos */
    this.productService.showProduct().subscribe(res=>{
      /** los productos se los asigna dataSourcex bajo el formato de la intefaz DataTableItem */
      this.dataSourcex = new MatTableDataSource<DataTableItem>( res );
      this.dataSourcex.paginator = this.paginator; //paginacion
      this.dataSourcex.sort = this.sort;//filtro y orden
    }); 
  }

  applyFilter(filterValue: string) {
     this.dataSourcex.filter = filterValue.trim().toLowerCase();    
  } 
  
  /** guardad la cantidad de productos que se quieren vender */
  howManyStockKeyUp(value: number){
    this.howManyStock=value;    
  }
  
  /** guarda la informacion del producto seleccionado */
  add(value: ResponseProducto){
    this.productoActual=value;
  }

  /**multiplica la cantidad de producto que se quiere vender por el precio del mismo, para calcular el total
   * valida si la cantidad que se quiere vender es menor que la que hay en el inventario
   * de ser asi envia la informacion al carrito de compras
   */
  total(){
    let total = (this.howManyStock*this.productoActual.precioVentaDto);
      this.totalVenta=total;
      this.productoActual.total=this.totalVenta;
      this.productoActual.cantidad=this.howManyStock;
      console.log(this.productoActual.cantidad,this.totalVenta,this.howManyStock);
    if (this.productoActual.cantidadDto>=this.howManyStock){
      this.sendIfonCarrito();
    }else{
      alert(this.howManyStock +' exede la candita de stock: '+this.productoActual.cantidadDto)
    };
    return this.productoActual;
  }

  /** envia al services la info del producto para asi agregarlo al carrito de compras */
  sendIfonCarrito(){
    this.productService.carritoGetInfo(this.productoActual);
    console.log(this.productoActual);
    this.sudProduct();
    alert('agregado al carrito');
    
  }

  sudProduct(){
    let sud=this.productoActual.cantidadDto-this.howManyStock;
    let obs =this.productService.modifyProduct(this.productoActual.idProductoDto,sud,this.productoActual.precioVentaDto);
      obs.subscribe(res => {
        alert("Actualizado con exito");
        this.infoTable();
      });
    
  }

}

    


