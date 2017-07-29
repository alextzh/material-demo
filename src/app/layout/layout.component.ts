import {Component, OnInit} from '@angular/core';
import {NoticeService} from "../service/notice.service";
declare var $:any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private isShow:boolean = false;
  constructor(private noticeService:NoticeService) {

  }

  ngOnInit() {
    this.noticeService.cartEvent.emit(this.isShow)
  }

}
