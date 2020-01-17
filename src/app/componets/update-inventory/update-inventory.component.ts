import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InventoryTableItem } from '../inventory/inventory-table-datasource';
import {ProductsService} from '../service/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements AfterViewInit, OnInit {
  public newStock: number
  public idProducto: number
  public newPrice: number

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<InventoryTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idProductoDto', 'tradeMark', 'modeloDto', 'sistemaOperativoDto', 'precioDto', 'salePrice', 'cantidadDto','edit'];


  constructor(private router: Router, private productService:ProductsService) { }

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
  
  ngAfterViewInit() {
  
  }
  
  applyFilter(filterValue: string) {
    this.dataSourcex.filter = filterValue.trim().toLowerCase();    
  }

  newPriceKeyup(value:number){
    this.newPrice=value;

  }
  newStockKeyup(value:number){
    this.newStock=value;

  }
  IdProductKeyup(value:number){
    this.idProducto=value;
  }

  modifyProduct(){
    if(this.idProducto == null || this.newStock == null ||this.newPrice == null){
      alert('Debe llenar todo los campos, si hay uno queno modifica copielo como es encuentra en la tabla');
    }else{
      let obs =this.productService.modifyProduct(this.idProducto,this.newStock,this.newPrice);
      obs.subscribe(res => {
        alert("Actualizado con exito")
        this.router.navigate(['/update-inventory']);
      });


      
    }
  }

}







