import { Component, OnInit } from '@angular/core';
import {StageList, TransferItemService} from '../../service/transfer-item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  private lists: StageList[];
  private errorMessage: string;
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];

  constructor(private routeInfo: ActivatedRoute, private transferItemServices: TransferItemService) { }
  getStageList(id: number) {
    this.transferItemServices.getStageList(id)
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    const loanNo = this.routeInfo.snapshot.params['id'];
    this.getStageList(loanNo);
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
