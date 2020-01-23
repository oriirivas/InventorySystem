import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private markName:string
  constructor(private productService:ProductsService) { }

  ngOnInit() {
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

}
