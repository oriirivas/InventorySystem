import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';

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
     return this.http.get('http://localhost:8090/api/v1/ventas/listar', this.headersOptions );
  }
  
}
