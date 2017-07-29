import { Component, OnInit } from '@angular/core';
import {NoticeService, PlatformList} from "../../service/notice.service";

@Component({
  selector: 'app-ptgg-list',
  templateUrl: './ptgg-list.component.html',
  styleUrls: ['./ptgg-list.component.css']
})
export class PtggListComponent implements OnInit {
  private lists:PlatformList[];
  private errorMessage:string;
  private totalRecords:number;
  private rows:number = 6;
  private pagedLists:any[];
  constructor(private noticeService:NoticeService) {
  }
  getPlatformList(){
    this.noticeService.getPlatformList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0,this.rows);
        },
        error => this.errorMessage = <any>error
      )
  }
  ngOnInit() {
    this.getPlatformList()
  }
  setPage($event){
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first,($event.page + 1)*$event.rows);
  }
}
