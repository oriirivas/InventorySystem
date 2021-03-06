import { Injectable } from '@angular/core';
import {ResponseDtoUsuario } from '../inventory/inventory-table-datasource'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  public login(name: string, pass: string) {
    let body = {
      "passwordDto": pass,
      "userNameDto": name
    }
    return this.http.post<ResponseDtoUsuario>('http://localhost:8090/api/v1/usuarios/sessions', body, this.headersOptions );
    
  }
  public register(charge: string, date:Date, name: string, pass: string, userName: string) {
    let body = {
      "cargoDto": charge,
      "fechaDto": date,
      "nombreDto": userName,
      "passwordDto": pass,
      "userNameDto": name
    }
    return this.http.post('http://localhost:8090/api/v1/usuarios', body, this.headersOptions );
    
  }
  public deleteUser(idUser: number){
    let id = idUser
    return this.http.delete(''+id,this.headersOptions);
  }

}


