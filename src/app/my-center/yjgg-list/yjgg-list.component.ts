import { Component, OnInit } from '@angular/core';
import {AchievementList, NoticeService} from '../../service/notice.service';
@Component({
  selector: 'app-yjgg-list',
  templateUrl: './yjgg-list.component.html',
  styleUrls: ['./yjgg-list.component.css']
})
export class YjggListComponent implements OnInit {
  private lists: AchievementList[];
  private errorMessage: string;
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];
  constructor(private noticeService: NoticeService) {
  }
  getAchievementList() {
    this.noticeService.getAchievementList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = items.length;
          this.pagedLists = items.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    this.getAchievementList();
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
