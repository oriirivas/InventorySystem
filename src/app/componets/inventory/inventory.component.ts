import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InventoryTableItem } from './inventory-table-datasource';
import {ProductsService} from '../service/products.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements AfterViewInit, OnInit {

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //@ViewChild(MatTable, {static: false}) table: MatTable<InventoryTableItem>;
  //dataSource: DataTableDataSource;
  dataSourcex:MatTableDataSource<InventoryTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioCompraDto', 'precioVentaDto', 'cantidadDto'];


  constructor(private productService:ProductsService) { }

  ngOnInit() { 
    
    
    this.productService.showProduct().subscribe(res=>{

      this.dataSourcex = new MatTableDataSource<InventoryTableItem>( res );
      
      this.dataSourcex.paginator = this.paginator;
      this.dataSourcex.sort = this.sort;

     
      
      //this.dataSource.connect();
      console.log(res);
      //this.tableInfo=res;
    });  
  }

  ngAfterViewInit(){

  }
 
  applyFilter(filterValue: string) {
      this.dataSourcex.filter = filterValue.trim().toLowerCase();    
  }
}





