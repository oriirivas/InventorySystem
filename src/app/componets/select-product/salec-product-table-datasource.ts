import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {InventoryComponent} from '../inventory/inventory.component'

// TODO: Replace this with your own data model type
export interface SelectProductTableItem {
  id: number;
  modelo:string;
  precio:number;
  cantidad:number;
  total:number;
}


