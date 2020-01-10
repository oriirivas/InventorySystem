import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface InventoryTableItem {
  id: number;
  tradeMark:string;
  model:string;
  category:string;
  buyPrice:number;
  salePrice:number;
  stock:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: InventoryTableItem[] = [
  {id: 1, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 2, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 3, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 4, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 5, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 6, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 7, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 8, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 9, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
  {id: 10, tradeMark:'iphone', model:'xyz', category:'ios', buyPrice: 540, salePrice: 750, stock: 19},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<InventoryTableItem> {
  data: InventoryTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<InventoryTableItem[]> {
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
  private getPagedData(data: InventoryTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: InventoryTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'tradeMark': return compare(+a.tradeMark, +b.tradeMark, isAsc);
        case 'model': return compare(+a.model, +b.model, isAsc);
        case 'category': return compare(+a.category, +b.category, isAsc);
        case 'buyPrice': return compare(+a.buyPrice, +b.buyPrice, isAsc);
        case 'salePrice': return compare(+a.salePrice, +b.salePrice, isAsc);
        case 'stock': return compare(+a.stock, +b.stock, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}