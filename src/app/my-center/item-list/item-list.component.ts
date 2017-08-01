import { Component, OnInit } from '@angular/core';
import {LoanList, TransferItemService} from '../../service/transfer-item.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  private lists: LoanList[];
  private errorMessage: string;
  private rows: number = 6;
  private totalRecords: number;
  private pagedLists: any[];
  constructor(private routeInfo: ActivatedRoute, private transferItemService: TransferItemService) {

  }
  getItemList(id: number) {
    this.transferItemService.getItemList(id)
      .subscribe(
        item => {
          this.lists = item.itemList;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    const itemId: number = this.routeInfo.snapshot.params['id'];
    this.getItemList(itemId);
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
