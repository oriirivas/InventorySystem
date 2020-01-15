import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {UpdateInventoryComponent} from './update-inventory.component'

// TODO: Replace this with your own data model type
export interface UpdateInventoryTableItem {
    idProductoDto: number;
    tradeMark:string;
    modeloDto:string;
    sistemaOperativoDto:string;
    precioDto:number;
    salePrice:number;
    cantidadDto:number;
    edit:object;
}


export class DataTableDataSource extends DataSource<UpdateInventoryTableItem> {

  data: UpdateInventoryTableItem[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  addList( obj ){
    this.data = obj;

  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UpdateInventoryTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UpdateInventoryTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UpdateInventoryTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'idProductoDto': return compare(+a.idProductoDto, +b.idProductoDto, isAsc);
        case 'tradeMark': return compare(+a.tradeMark, +b.tradeMark, isAsc);
        case 'modeloDto': return compare(+a.modeloDto, +b.modeloDto, isAsc);
        case 'sistemaOperativoDto': return compare(+a.sistemaOperativoDto, +b.sistemaOperativoDto, isAsc);
        case 'precioDto': return compare(+a.precioDto, +b.precioDto, isAsc);
        case 'salePrice': return compare(+a.salePrice, +b.salePrice, isAsc);
        case 'cantidadDto': return compare(+a.cantidadDto, +b.cantidadDto, isAsc);
        case 'edit': return compare(+a.edit, +b.edit, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
