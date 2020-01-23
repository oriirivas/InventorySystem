import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { InventoryTableItem, ResponseDtoMarca, ResponseProducto } from '../inventory/inventory-table-datasource';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private producto: ResponseProducto = {} as any;
  private idSuprema:number;

  //private marca: ResponseDtoMarca = {} as any;

  listaSale: Array<ResponseProducto> = [] as any;

  //listaMarca: Array<ResponseDtoMarca> = [] as any;

  private headersOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    }
  };

  constructor(private http: HttpClient) { }

  public showProduct() {
    //localStorage.getItem("user");
    return this.http.get<InventoryTableItem[]>('http://localhost:8090/api/v1/producto/listar', this.headersOptions );   
  }

  public getProduct(n:number) {
    this.idSuprema= n;
    return this.idSuprema;
    }

    public saleProduct(){
      return this.http.get<ResponseProducto[]>('http://localhost:8090/api/v1/producto/'+this.idSuprema, this.headersOptions );
    }

  /*public listProducts(id2:number) {
    let product: ResponseProducto = {
      id: id2,
      marca: "kaka",
      model:  "jJJ",
      stock:  1,
      total:  7
  }   
    this.listaSale.push(product);
    return this.listaSale;
  }*/

  public listMark(){
    return this.http.get<ResponseDtoMarca[]>('http://localhost:8090/api/v1/marcas/listar', this.headersOptions);
    
  }
   

  public addProducto(stock:number, tradeMark:string, model:string, buyPrice:number, salePrice:number, category:string, date: Date) {
    let body = {
      "cantidadDto": stock,
      "fechaProductoDto": date,
      "marcaDto": tradeMark,
      "modeloDto": model,
      "precioCompraDto": buyPrice,
      "precioVentaDto": salePrice,
      "sistemaOperativoDto": category
    }
    let aux = this.http.post('http://localhost:8090/api/v1/producto', body, this.headersOptions );
    return aux; 
  }

  public modifyProduct(optionId:number, stock:number, buyPrice:number) {
    let id = optionId;
    let body = {
      "cantidadDto": stock,
      "precioDto": buyPrice
    }
    let aux = this.http.put('http://localhost:8090/api/v1/producto/modify/'+id, body, this.headersOptions );
    return aux; 
  } 

  public deleteProduct(optionId:number) {
    let id = optionId;
    let aux = this.http.delete('http://localhost:8090/api/v1/producto/delete/'+id, this.headersOptions );
    return aux; 
  } 
}





  