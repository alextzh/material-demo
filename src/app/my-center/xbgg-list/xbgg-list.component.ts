import { Component, OnInit } from '@angular/core';
import {NewNormList, NoticeService} from '../../service/notice.service';

@Component({
  selector: 'app-xbgg-list',
  templateUrl: './xbgg-list.component.html',
  styleUrls: ['./xbgg-list.component.css']
})
export class XbggListComponent implements OnInit {
  private lists: NewNormList[];
  private errorMessage: string;
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];
  constructor(private noticeService: NoticeService) {

  }
  getNewNormList() {
    this.noticeService.getNewNormList()
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
    this.getNewNormList();
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
