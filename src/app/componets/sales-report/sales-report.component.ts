import { Component, OnInit } from '@angular/core';
import { ResponseProducto } from '../inventory/inventory-table-datasource';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  private listProducts: Array<ResponseProducto>;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.prductSale();
    console.log("QQQQQQQQQQQ" + this.productService.carritoSendInfo())
  }

  prductSale(){
    this.listProducts=this.productService.carritoSendInfo()
    /*let obs= this.productService.carritoSendInfo();
    obs.subscribe(res=> {
      console.log(res);
      this.listProducts=res;
      console.log(this.listProducts);
    });*/
     
  }

}
