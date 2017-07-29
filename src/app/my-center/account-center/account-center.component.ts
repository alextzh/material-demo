import { Component, OnInit } from '@angular/core';
import {TradeRecord, TransferItemService} from "../../service/transfer-item.service";
import {NoticeService} from "../../service/notice.service";

@Component({
  selector: 'app-account-center',
  templateUrl: './account-center.component.html',
  styleUrls: ['./account-center.component.css']
})
export class AccountCenterComponent implements OnInit {
  private items:TradeRecord[];
  private isShow:boolean = false;
  constructor(private transferItemService:TransferItemService,private noticeService:NoticeService) {
  }
  getTradeRecord(){
    this.transferItemService.getTradeRecord()
      .subscribe(
        items => {
          this.items = items.slice(0,6)
        }
      )
  }
  ngOnInit() {
    this.getTradeRecord();
    this.noticeService.cartEvent.emit(this.isShow)
  }
}
