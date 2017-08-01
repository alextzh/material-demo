import { Component, OnInit } from '@angular/core';
import {BoughtTransferList, TransferItemService} from '../../service/transfer-item.service';

@Component({
  selector: 'app-bought-transfer',
  templateUrl: './bought-transfer.component.html',
  styleUrls: ['./bought-transfer.component.css']
})
export class BoughtTransferComponent implements OnInit {
  private lists: BoughtTransferList[];
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];
  constructor(private transferItemService: TransferItemService) {

  }
  getBoughtTransfer() {
    this.transferItemService.getBoughtTransferList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0, this.rows);
        }
      );
  }
  ngOnInit() {
    this.getBoughtTransfer();
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
