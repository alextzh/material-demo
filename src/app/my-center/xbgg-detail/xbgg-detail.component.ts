import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NoticeService} from "../../service/notice.service";
declare var $:any;
@Component({
  selector: 'app-xbgg-detail',
  templateUrl: './xbgg-detail.component.html',
  styleUrls: ['./xbgg-detail.component.css']
})
export class XbggDetailComponent implements OnInit {
  private content:string;
  private errorMessage:string;
  private title:string;
  constructor(private routeInfo:ActivatedRoute,private noticeService:NoticeService) { }
  getNewNormDetail(id:string){
    this.noticeService.getNewNormDetail(id)
      .subscribe(
        item => {
          this.content = item.content;
          this.title = item.title;
        },
        error => this.errorMessage = <any>error
      )

  }
  ngOnInit() {
    let id:string = this.routeInfo.snapshot.params["id"];
    this.getNewNormDetail(id);
  }
}
