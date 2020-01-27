import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { ResponseSell } from '../inventory/inventory-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class SellService {

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
  private listSell: Array<ResponseSell> = [] as any;

  addSell(stock:number, date:Date, model:string, branchOffice: string, user:string){
    let body =  {
      "cantidadVendidosDto": stock,
      "fechaVentaDto": date,
      "modeloDto": model,
      "nombreSucursalDto": branchOffice,
      "vendedorDto": user
    }

    return this.http.post('http://localhost:8090/api/v1/ventas/vender', body, this.headersOptions );
  }
  getSell(){
     return this.http.get<ResponseSell[]>('http://localhost:8090/api/v1/ventas/listar', this.headersOptions );
  }
  public sellGetInfo(producto : ResponseSell){
    let body =  {
      "cantidadVendidosDto": producto.cantidadVendidosDto,
      "fechaVentaDto": producto.fechaVentaDto,
      "modeloDto": producto.modeloDto,
      "nombreSucursalDto": producto.nombreSucursalDto,
      "vendedorDto": producto.vendedorDto
    }
    //this.listSell.push(producto);
    return this.http.post('http://localhost:8090/api/v1/ventas/vender', body, this.headersOptions );
  }
  
}
