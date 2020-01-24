import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {InventoryComponent} from '../inventory/inventory.component'

// TODO: Replace this with your own data model type
export interface InventoryTableItem {
  idProductoDto: number;
  marcaDto:string;
  modeloDto:string;
  sistemaOperativoDto:string;
  precioDto:number;
  salePrice:number;
  cantidadDto:number;
  edit:object;
  delate:object;
  sale:object;
  plus:object;
  sud:object;
}

export interface ResponseDtoUsuario{
  nombreUsuarioDto: string,
  userNameDto: string,
  tipoRolDto: string
}

export interface ResponseDtoMarca{
  marcaDto: string
}

export interface ResponseProducto {
  subscribe(arg0: (res: any) => void);
  idProductoDto: number,
  modeloDto:string,
  sistemaOperativoDto: string,
  marcaDto: string,
  precioCompraDto: number,
  precioVentaDto: number,
  fechaProductoDto: Date,
  cantidadDto: number,

  total:number;
  cantidad:number;
  

  /*id: number,
  marca: string,
  model: string,
  stock: number,
  total: number */
}