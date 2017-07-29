import { Component, OnInit } from '@angular/core';
import {AgreementModelList, NoticeService} from "../../service/notice.service";

@Component({
  selector: 'app-agreement-model',
  templateUrl: './agreement-model.component.html',
  styleUrls: ['./agreement-model.component.css']
})
export class AgreementModelComponent implements OnInit {
  private lists:AgreementModelList[];
  private errorMessage:string;
  private totalRecords:number;
  private rows:number = 6;
  private pagedItems:any[];
  constructor(private noticeService:NoticeService) {
  }
  getAgreementModelList(){
    this.noticeService.getAgreementModelList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = this.lists.length;
          this.pagedItems = this.lists.slice(0,this.rows)
        },
        error => this.errorMessage = <any>error
      )
  }
  ngOnInit() {
    this.getAgreementModelList()
  }
  setPage($event){
    this.rows = $event.rows;
    this.pagedItems = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
