import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InventoryTableItem} from '../inventory/inventory-table-datasource';
import {SellService} from '../service/sell.service';
import { ResponseSellItem } from './sales-report-table-datasource';
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
  dataSourcex:MatTableDataSource<ResponseSellItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['cantidadVendidoDto', 'fechaDto', 'productoDto', 'sucursalDto', 'nombreVendedorDto','total'];
 
  //private listProducts: Array<ResponseProducto>;
  constructor(private sellService: SellService) { }

  ngOnInit() {
    this.prductSale();
    //this.prductSale();
    //console.log("QQQQQQQQQQQ" + this.productService.carritoSendInfo())
  }
  ngAfterViewInit(){

  }
 
  applyFilter(filterValue: string) {
        this.dataSourcex.filter = filterValue.trim().toLowerCase();    
  }

  prductSale(){
    this.sellService.getSell().subscribe(res=>{
      this.dataSourcex = new MatTableDataSource<ResponseSellItem>( res );
      this.dataSourcex.paginator = this.paginator;
      this.dataSourcex.sort = this.sort;

      console.log(res);
  
    });  
     
  }

}
