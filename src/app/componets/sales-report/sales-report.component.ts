import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ResponseSell} from '../inventory/inventory-table-datasource';
import {ProductsService} from '../service/products.service';
//import { ResponseProducto} from '../inventory/inventory-table-datasource';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements AfterViewInit,OnInit {
    
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //@ViewChild(MatTable, {static: false}) table: MatTable<InventoryTableItem>;
  //dataSource: DataTableDataSource;
  dataSourcex:MatTableDataSource<ResponseSell>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['cantidadVendidosDto', 'fechaVentaDto', 'modeloDto', 'nombreSucursalDto', 'vendedorDto'];
 
  //private listProducts: Array<ResponseProducto>;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService. getSell().subscribe(res=>{
      this.dataSourcex = new MatTableDataSource<ResponseSell>( res );
      this.dataSourcex.paginator = this.paginator;
      this.dataSourcex.sort = this.sort;

     
      
      //this.dataSource.connect();
      console.log(res);
      //this.tableInfo=res;
    });  
    //this.prductSale();
    //console.log("QQQQQQQQQQQ" + this.productService.carritoSendInfo())
  }
  ngAfterViewInit(){

  }
 
  applyFilter(filterValue: string) {
      this.dataSourcex.filter = filterValue.trim().toLowerCase();    
  }

  prductSale(){
    //this.listProducts=this.productService.carritoSendInfo()
    /*let obs= this.productService.carritoSendInfo();
    obs.subscribe(res=> {
      console.log(res);
      this.listProducts=res;
      console.log(this.listProducts);
    });*/
     
  }

}
