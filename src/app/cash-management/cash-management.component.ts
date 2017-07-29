import { Component, OnInit } from '@angular/core';
import {NoticeService} from "../service/notice.service";

@Component({
  selector: 'app-cash-management',
  templateUrl: './cash-management.component.html',
  styleUrls: ['./cash-management.component.css']
})
export class CashManagementComponent implements OnInit {
  private isShow:boolean = false;
  constructor(private noticeService:NoticeService) { }

  ngOnInit() {
    this.noticeService.cartEvent.emit(this.isShow)
  }

}
