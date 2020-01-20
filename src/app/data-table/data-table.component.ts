
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from './data-table-datasource';
import {ProductsService} from '../componets/service/products.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<DataTableItem>;

  displayedColumns = ['idProductoDto', 'tradeMark', 'modeloDto', 'sistemaOperativoDto', 'precioDto', 'salePrice', 'cantidadDto'];

  constructor(private productService:ProductsService) { }
  
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
}



