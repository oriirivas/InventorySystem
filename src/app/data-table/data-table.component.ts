import { Router } from '@angular/router';
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from './data-table-datasource';
import {ProductsService} from '../componets/service/products.service'
import { ResponseProducto } from '../componets/inventory/inventory-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  
  
  public listaSale:Array<ResponseProducto>;

  stock:number;
  id:number;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<DataTableItem>;

  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioDto', 'salePrice', 'cantidadDto', 'sale'];

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
  applyFilter(filterValue: string) {
    this.dataSourcex.filter = filterValue.trim().toLowerCase();    
}
stockKeyup(value: number){
  this.stock=value;

}
IdProduct1Keyup(value: number){
  this.id=value;
}

add(){
  if(this.id ==null || this.stock == undefined){
    alert("debe llenar todo los campos")
  }else{    
    this.productService.listProducts(this.id);
    console.log(this.listaSale);
    //this.router.navigate(['/sales-selec']);

  }
}

}

    


