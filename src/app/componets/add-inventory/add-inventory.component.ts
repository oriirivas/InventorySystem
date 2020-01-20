import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../componets/service/products.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  public date: Date
  public numberf: string
  public provider: string
  public tradeMark: string
  public model: string
  public stock: number
  public category: string
  public salePrice: number
  public buyPrice: number

  public idMark=1;
  
  public lockDate = 'ingrese fecha';
  public lockNumber = 'ingrese numero de factura';
  public lockProvider = 'ingrese proveedor';
  public lockTradeMark = 'ingrese marca';
  public lockModel = 'ingrese modelo';
  public lockSalePrice = 'ingrese precio de venta';
  public lockBuyPrice = 'ingrese precio de compra';
  public lockStock = 'ingrese cantidad de productos';
  public lockCategory = 'ingrese el sistema operativo';

  public validDate= "is-invalid";
  public validNumber= "is-invalid";
  public validProvider= "is-invalid";
  public validTradeMark= "is-invalid";
  public validSalePrice= "is-invalid";
  public validBuyPrice= "is-invalid";
  public validStock= "is-invalid";
  public validModel= "is-invalid";
  public validCategory= "is-invalid";
  estadoPositivo: boolean = true;
  lista:string[]=[];

  constructor(private router: Router,
    private productServices: ProductsService) { }

  ngOnInit() {
    

  }
  add(){
    console.log('llegueeeeee');
    console.log( this.productServices.showProduct);
    alert('Debe llenar todos los datos para agregado')
  }

 

  validate(){
    let somethingn = true;
    if(somethingn){
      this.lockDate = 'guardado';
      this.validDate="valid-feedback";
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
    console.log(this.date, this.numberf,this.category,this.provider,this.tradeMark,this.model,this.buyPrice,this.salePrice,this.stock)
    if(this.date==null ||this.numberf==null || this.category == null ||this.provider == null || this.tradeMark == null || this.model==null || this.buyPrice == null || this.salePrice == null || this.stock == null){
      alert('porfavor ingrese todo los datos')
    }else{
      let obs =this.productServices.addProducto(this.stock, this.tradeMark, this.model, this.buyPrice, this.category, this.date)
      obs.subscribe(res => {
        alert("Guardado con exito")
        this.router.navigate(['/home']);
      });
    }    
  }
  
  
  markList(){
    let aja =this.productServices.showMark();
    
  }
} 

export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}

export interface Food {
  value: string;
  viewValue: string;
}

export interface marklist {
  "marcaDto":string;
}

