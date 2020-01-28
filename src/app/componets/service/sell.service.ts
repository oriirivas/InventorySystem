import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseSellItem, ResponseSell } from '../sales-report/sales-report-table-datasource';


import { HAMMER_LOADER } from '@angular/platform-browser';
import { InventoryTableItem, ResponseDtoMarca, ResponseProducto} from '../inventory/inventory-table-datasource';


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
  public sellSetInfo(producto : ResponseSell){
    let body =  {
      "cantidadVendidosDto": producto.cantidadVendidosDto,
      "fechaVentaDto": producto.fechaVentaDto,
      "productoDto": producto.modeloDto,
      "nombreSucursalDto": producto.nombreSucursalDto,
      "vendedorDto": producto.vendedorDto
    }
    debugger
    //this.listSell.push(producto);
    return this.http.post('http://localhost:8090/api/v1/ventas/vender', body, this.headersOptions );
  }
  public getSell(){
    return this.http.get<ResponseSellItem[]>('http://localhost:8090/api/v1/ventas/listar', this.headersOptions );
 }
}
