import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MessageTableComItem {
  Subject: string;
  From:string;
  On: string;
  To:string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MessageTableComItem[] = [
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  {Subject:'Key Sales Information – 1st Quarter (Jan-Feb-Mar) of 2019', From:'Rajeev Kumar', On:'4/23/2019 2:43:41 PM', To:'Company'},
  {Subject:'TechTalk - RabbitMQ: Asynchronous Messaging using Java and Spring', From:'Pankaj Chanana', On:'4/23/2019 2:43:41 PM', To:'Bhubaneswar'},
  
  
];

/**
 * Data source for the MessageTableCom view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MessageTableComDataSource extends DataSource<MessageTableComItem> {
  data: MessageTableComItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MessageTableComItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

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
  private getPagedData(data: MessageTableComItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MessageTableComItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Subject': return compare(a.Subject, b.Subject, isAsc);
        case 'From': return compare(+a.From, +b.From, isAsc);
        case 'On': return compare(+a.On, +b.On, isAsc);
        case 'To': return compare(+a.To, +b.To, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
