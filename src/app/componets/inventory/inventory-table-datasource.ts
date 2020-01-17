import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {InventoryComponent} from '../inventory/inventory.component'

// TODO: Replace this with your own data model type
export interface InventoryTableItem {
  idProductoDto: number;
  tradeMark:string;
  modeloDto:string;
  sistemaOperativoDto:string;
  precioDto:number;
  salePrice:number;
  cantidadDto:number;
  edit:object;
  delate:object;
}


