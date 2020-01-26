import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InventoryTableItem } from '../inventory/inventory-table-datasource';
import {ProductsService} from '../service/products.service';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs/operators';


@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements AfterViewInit, OnInit {
  private newStock: number
  private idProducto: number
  private newPrice: number
  private numberOperation: number

  private validId = "is-invalid";
  private validId1 = "is-invalid";
  private validStock = "is-invalid";
  private validPrice = "is-invalid";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<InventoryTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioCompraDto', 'precioVentaDto', 'cantidadDto','edit','delate', 'plus', 'sud'];


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

  plusProductKeyup(value:number){
    this.numberOperation=value;
  }

  newPriceKeyup(value:number){
    this.newPrice=value;
    this.validPrice="is-valid";
    

  }
  newStockKeyup(value:number){
    this.newStock=value;
    this.validStock="is-valid";

  }
  IdProductKeyup(value:number){
    this.idProducto=value;
    this.validId="is-valid";
  }

  

  getId(value : number){
    this.idProducto=value;
  }

  modifyProduct(){
    if(this.newStock == null ||this.newPrice == null){
      alert('Debe llenar todo los campos, si hay uno que no desea modificar, copielo como es encuentra en la tabla');
    }else{
      let obs =this.productService.modifyProduct(this.idProducto,this.newStock,this.newPrice);
      obs.subscribe(res => {
        alert("Actualizado con exito")
        
        this.router.navigate(['/update-inventory']);
      });


      
    }
  }
  deleteProduct(){
    if(this.idProducto == undefined){
      alert('error');
    }else{
      let obs =this.productService.deleteProduct(this.idProducto);
      obs.subscribe(res => {
        alert("Eliminado con exito")
        this.router.navigate(['/update-inventory']);
      });   
    }
  }

  addProduct(){
    console.log()
   if(this.idProducto == undefined || this.numberOperation == undefined){
      alert('Debe llenar todo los campos');
    }else{
      let obs = this.productService.getProduct(this.idProducto);
      obs.subscribe(res => {
        let totalStock=(+res.cantidadDto+ +this.numberOperation);
        console.log(totalStock)
        this.newStock = totalStock;
        this.newPrice = res.precioVentaDto;
        this.modifyProduct();
        alert("Operacion realizada con exito")
      });   
    }
    return this.newStock
  }
  sudProduct(){
    console.log()
   if(this.idProducto == undefined || this.numberOperation == undefined){
      alert('Debe llenar todo los campos');
    }else{
      let obs = this.productService.getProduct(this.idProducto);
      obs.subscribe(res => {
        let totalStock=(res.cantidadDto - this.numberOperation);
        console.log(totalStock)
        this.newStock = totalStock;
        this.newPrice = res.precioVentaDto;
        this.modifyProduct();
        alert("Operacion realizada con exito")
      });   
    }
    return this.newStock
  }
}





