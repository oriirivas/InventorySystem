import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, InventoryTableItem } from './inventory-table-datasource';
import {ProductsService} from '../service/products.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements AfterViewInit, OnInit {

  public tableInfo;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<InventoryTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idProductoDto', 'tradeMark', 'modeloDto', 'sistemaOperativoDto', 'precioDto', 'salePrice', 'cantidadDto'];


  constructor(private productService:ProductsService) { }

  ngOnInit() { 
    
    
    this.productService.showProduct().subscribe(res=>{

      this.dataSource = new DataTableDataSource();
      this.dataSource.addList( res );
      

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      
      this.dataSource.connect();
      console.log(res);
      this.tableInfo=res;
    }); 
    
    
  }
  ngAfterViewInit() {
    
  }

  tableInfomation(){
     
      this.tableInfo=this.productService.showProduct().subscribe;  
     
  }

}






