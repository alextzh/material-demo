import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../service/notice.service';
declare const $: any;
@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {
  private expand: boolean = true;
  private isShow: boolean = false;
  constructor(private noticeService: NoticeService) {
    $(document).ready(function () {
      $('.collapsible').collapsible();
      $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        }
      );
    });
  }

  ngOnInit() {
    this.noticeService.cartEvent.emit(this.isShow);
  }
}
