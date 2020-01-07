import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  public date: string
  public number: string
  public provider: string
  public tradeMark: string
  public model: string
  public stock: string
  public salePrice: string
  public buyPrice: string

  public aja="invalid-feedback";
  
  public lockDate = 'ingrese fecha';
  public lockNumber = 'ingrese numero de factura';
  public lockProvider = 'ingrese proveedor';
  public lockTradeMark = 'ingrese marca';
  public lockModel = 'ingrese modelo';
  public lockSalePrice = 'ingrese precio de venta';
  public lockBuyPrice = 'ingrese precio de compra';
  public lockStock = 'ingrese cantidad de productos';

  public validDate= "is-invalid";
  public validNumber= "is-invalid";
  public validProvider= "is-invalid";
  public validTradeMark= "is-invalid";
  public validSalePrice= "is-invalid";
  public validBuyPrice= "is-invalid";
  public validStock= "is-invalid";
  public validModel= "is-invalid";
  estadoPositivo: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  add(){
    alert('Debe llenar todos los datos para agregado')
  }
  //[ngClass]="{valid-feedback: estadoPositivo, invalid-feedback: !estadoPositivo }"
  validate(){
    let somethingn = true;
    if(somethingn){
      this.lockDate = 'guardado';
      this.validDate="valid-feedback";
    }
  }

  dateKeyup(value: string) {
    this.date = value;
    this.lockDate = 'ingresado correctamente';
    this.validDate='is-valid';
  }
  numberKeyup(value: string) {
    this.number = value;
    this.lockNumber = 'ingresado correctamente';
    this.validNumber='is-valid';
  }
  providerKeyup(value: string) {
    this.provider = value;
    this.lockProvider = 'ingresado correctamente';
    this.validProvider='is-valid';
  }
  tradeMarkKeyup(value: string) {
    this.tradeMark = value;
    this.lockTradeMark = 'ingresado correctamente';
    this.validTradeMark='is-valid';
  }
  modelKeyup(value: string) {
    this.model = value;
    this.lockModel = 'ingresado correctamente';
    this.validModel='is-valid';
  }
  stockKeyup(value: string) {
    this.stock = value;
    this.lockStock = 'ingresado correctamente';
    this.validStock='is-valid';
  }
  buyPriceKeyup(value: string) {
    this.buyPrice = value;
    this.lockBuyPrice = 'ingresado correctamente';
    this.validBuyPrice='is-valid';
  }
  salePriceKeyup(value: string) {
    this.salePrice = value;
    this.lockSalePrice = 'ingresado correctamente';
    this.validSalePrice='is-valid';
  }
}
