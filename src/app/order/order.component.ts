import {Component, OnInit} from '@angular/core';
import {NoticeService} from "../service/notice.service";
declare var $:any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private isShow:boolean = false;
  constructor(private noticeService:NoticeService) {
    $(document).ready(function() {
      $('select').material_select();
      $('.caret').html('<i class="material-icons" style="color:#9e9e9e;margin-top:-5px;">keyboard_arrow_down</i>');
    });

  }

  ngOnInit() {
    this.noticeService.cartEvent.emit(this.isShow)
  }

}
