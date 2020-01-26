import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ResponseDtoMarca, ResponseDtoUsuario } from '../inventory/inventory-table-datasource';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private lista:ResponseDtoMarca[];
  private markName:string;
  private lockTradeMark = 'ingrese marca';
  private validTradeMark= "is-invalid";
  private tradeMark: string;
  private id:number;

  private userList:ResponseDtoUsuario[];
  constructor(private productService:ProductsService,private userServices:LoginService) { }

  ngOnInit() {
    this.listarMarca();
  }

  markNameKeyup(value: string){
    this.markName= value;
  }

  addMark(){
    if(this.markName == undefined){
      alert('porfavor ingrese el nombre de la marca')
    }else{
      let obs =this.productService.addMark(this.markName).subscribe(res => {
        alert("Guardado con exito");
      }, error => {
        alert('Disculpe tenemos problemas con el sistema, reintente mas tarde');
      });   
    }  
  }
  tradeMarkKeyup() {
    this.lockTradeMark = 'ingresado correctamente';
    this.validTradeMark='is-valid';
  }

  listarMarca(){
    let obs= this.productService.listMark();
    obs.subscribe(res=> {
      this.lista=res;
      console.log(this.lista);
    });
    
   }

   UserList(){
    let obs= this.productService.listMark();
    obs.subscribe(res=> {
      this.lista=res;
      console.log(this.lista);
    });
    
   }

   getId(value: number){
    this.id=value;
   }

   deleteUser(){
    if(this.id == undefined){
      alert('porfavor selecione el nombre de la marca')
    }else{
      let obs =this.userServices.deleteUser(this.id).subscribe(res => {
        alert("Eliminado con exito");
      }, error => {
        alert('Disculpe tenemos problemas con el sistema, reintente mas tarde');
      });   
    }  

   }

}
