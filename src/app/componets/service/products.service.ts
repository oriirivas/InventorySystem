import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

/*
  public showProduct(email: string, pass: string) {
  
    return this.http.get('http://localhost:8090/api/v1/producto', this.headersOptions );
    
  }
  

  public addProducto(count:number, tradeMark:number, model:string, price:number, category:string) {
    let body = {
      "cantidadDto": count,
      "fechaProductoDto": "2020-01-08T16:27:44.123Z",
      "idProductoDto": 0,
      "marcaDto": {
      "idMarca": tradeMark,
      "nombreMarca": "string"
    },
      "modeloDto": model,
      "precioDto": price,
      "sistemaOperativoDto": category
    }
    let aux = this.http.post('http://localhost:8090/api/v1/producto', body, this.headersOptions );
    return aux; 
  }

  

  public modifyProduct(email:string, pass:string, nombre: string, segundoNombre: string, apellido: string, segundoApellido: string, rut: string, rol: string) {
    let body = {
      "cantidadDto": 0,
      "fechaProductoDto": "2020-01-08T17:03:50.538Z",
      "idProductoDto": 0,
      "marcaDto": {
      "idMarca": 0,
      "nombreMarca": "string"
    },
      "modeloDto": "string",
      "precioDto": 0,
      "sistemaOperativoDto": "string"
    }
    let aux = this.http.post('http://localhost:8090/api/v1/producto/', body, this.headersOptions );
    return aux; 
  } /**/
}





  