import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../componets/service/products.service';
import { Router } from '@angular/router';
import { ResponseDtoMarca } from '../inventory/inventory-table-datasource';



@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  private date: Date
  private numberf: string
  private provider: string
  private tradeMark: string
  private model: string
  private stock: number
  private category: string
  private salePrice: number
  private buyPrice: number

  
  private marcaLocal: ResponseDtoMarca;
 
  private lockDate = 'ingrese fecha';
  private lockNumber = 'ingrese numero de factura';
  private lockProvider = 'ingrese proveedor';
  private lockTradeMark = 'ingrese marca';
  private lockModel = 'ingrese modelo';
  private lockSalePrice = 'ingrese precio de venta';
  private lockBuyPrice = 'ingrese precio de compra';
  private lockStock = 'ingrese cantidad de productos';
  private lockCategory = 'ingrese el sistema operativo';

  private validDate= "is-invalid";
  private validNumber= "is-invalid";
  private validProvider= "is-invalid";
  private validTradeMark= "is-invalid";
  private validSalePrice= "is-invalid";
  private validBuyPrice= "is-invalid";
  private validStock= "is-invalid";
  private validModel= "is-invalid";
  private validCategory= "is-invalid";
  private lista:ResponseDtoMarca[];

  constructor(private router: Router,
    private productServices: ProductsService) { }

  ngOnInit() {

    this.listarMarca();
    //this.validate(); // si no tienes el back corriendo comentar esta linea
    

  }
  /** metodo que valida si hay una sesion abierta, de no ser asi no te deja entrar */
  validate(){
    let open = localStorage.getItem("user");
    if(open== undefined){
      this.router.navigate(['/login']);
    }
  }

  dateKeyup(value: Date) {
    this.date = value;
    this.lockDate = 'ingresado correctamente';
    this.validDate='is-valid';
  }
  numberKeyup(value: string) {
    this.numberf = value;
    this.lockNumber = 'ingresado correctamente';
    this.validNumber='is-valid';
  }
  providerKeyup(value: string) {
    this.provider = value;
    this.lockProvider = 'ingresado correctamente';
    this.validProvider='is-valid';
  }
  tradeMarkKeyup() {
    this.lockTradeMark = 'ingresado correctamente';
    this.validTradeMark='is-valid';
  }
  modelKeyup(value: string) {
    this.model = value;
    this.lockModel = 'ingresado correctamente';
    this.validModel='is-valid';
  }
  stockKeyup(value: number) {
    this.stock = value;
    this.lockStock = 'ingresado correctamente';
    this.validStock='is-valid';
  }
  buyPriceKeyup(value: number) {
    this.buyPrice = value;
    this.lockBuyPrice = 'ingresado correctamente';
    this.validBuyPrice='is-valid';
  }
  salePriceKeyup(value: number) {
    this.salePrice = value;
    this.lockSalePrice = 'ingresado correctamente';
    this.validSalePrice='is-valid';
  }
  categoryKeyup(value: string) {
    this.category = value;
    this.lockCategory = 'ingresado correctamente';
    this.validCategory='is-valid';
  }
  
  

  newProduct(){
    console.log(this.marcaLocal.marcaDto, this.stock, this.marcaLocal.marcaDto, this.model, this.buyPrice, this.salePrice,  this.category, this.date)
    if(this.date== undefined ||this.numberf==undefined || this.category == undefined ||this.provider == undefined || this.marcaLocal.marcaDto == undefined || this.model == undefined || this.buyPrice == undefined || this.salePrice == undefined || this.stock == undefined){
      alert('porfavor ingrese todo los datos')
    }else{
      let obs =this.productServices.addProducto(this.stock, this.marcaLocal.marcaDto, this.model, this.buyPrice, this.salePrice,  this.category, this.date)
      obs.subscribe(res => {
        alert("Guardado con exito")
        this.router.navigate(['/home']);
      }, error => {
        alert('Disculpe tenemos problemas con el sistema, reintente mas tarde');
      });
    }  
  }

  listarMarca(){
    let obs= this.productServices.listMark();
    obs.subscribe(res=> {
      this.lista=res;
      console.log(this.lista);
    });
    
   }
  
 
} 


