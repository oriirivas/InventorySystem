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
  public idProducto1: number
  public newPrice: number
  public numberOperation: number

  public validId = "is-invalid";
  public validId1 = "is-invalid";
  public validStock = "is-invalid";
  public validPrice = "is-invalid";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSourcex:MatTableDataSource<InventoryTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idProductoDto', 'marcaDto', 'modeloDto', 'sistemaOperativoDto', 'precioDto', 'salePrice', 'cantidadDto','edit','delate', 'plus'];


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

  IdProduct1Keyup(value:number){
    this.idProducto1=value;
    this.validId1="is-valid";
  }

  modifyProduct(){
    if(this.idProducto == null || this.newStock == null ||this.newPrice == null){
      alert('Debe llenar todo los campos, si hay uno que no desea modificar, copielo como es encuentra en la tabla');
    }else{
      let obs =this.productService.modifyProduct(this.idProducto,this.newStock,this.newPrice);
      obs.subscribe(res => {
        //alert("Actualizado con exito")
        this.router.navigate(['/update-inventory']);
      });


      
    }
  }
  deleteProduct(){
    if(this.idProducto1 == null){
      alert('Debe llenar todo los campos');
    }else{
      let obs =this.productService.deleteProduct(this.idProducto1);
      obs.subscribe(res => {
        alert("Eliminado con exito")
        this.router.navigate(['/update-inventory']);
      });   
    }
  }

  /*addProduct(){
    if(this.idProducto1 == undefined || this.numberOperation == undefined){
      alert('Debe llenar todo los campos');
    }else{
      let obs =this.productService.getProduct(this.idProducto1);
      obs.subscribe(user => {
        user.precioDto
        alert("Operacion realizada con exito")
      });   
    }
    
    let obs = this.loginInfo.login(this.name, this.pass);
      obs.subscribe(user  => {
      if(user.tipoRolDto == "admi") {
        this.router.navigate(['/home']);
      }else {
        this.router.navigate(['/sales']);
       
      }

  }

  }*/
}





