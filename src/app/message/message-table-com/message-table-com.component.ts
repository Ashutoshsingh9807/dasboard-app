import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MessageTableComDataSource } from './message-table-com-datasource';
import { messageFilter } from 'src/app/shared/message-filter.model';

@Component({
  selector: 'app-message-table-com',
  templateUrl: './message-table-com.component.html',
  styleUrls: ['./message-table-com.component.css']
})
export class MessageTableComComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MessageTableComDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Subject', 'From', 'On', 'To'];
  messagefilter: messageFilter[] = [
    {value: 'All month', viewValue: 'All month'},
    {value: 'Last 90 days', viewValue: 'Last 90 days'},
    {value: 'January', viewValue: 'January'},
    {value: 'Feb', viewValue: 'Feb'}
  ];
  ngOnInit() {
    this.dataSource = new MessageTableComDataSource(this.paginator, this.sort);
  }
} 
