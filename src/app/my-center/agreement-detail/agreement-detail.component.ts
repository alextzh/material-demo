import { Component, OnInit } from '@angular/core';
import {NoticeService} from "../../service/notice.service";
import {ActivatedRoute} from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.css']
})
export class AgreementDetailComponent implements OnInit {
  private content:string;
  private title:string;
  private errorMessage:string;
  constructor(private routerInfo:ActivatedRoute,private noticeService:NoticeService) { }
  getAgreementDetail(id:string){
    this.noticeService.getAgreementModelDetail(id)
      .subscribe(
        item => {
          this.content = item.content;
          this.title = item.title;
        },
        error => this.errorMessage = <any>error
      )
  }
  ngOnInit() {
    let id:string = this.routerInfo.snapshot.params["id"];
    this.getAgreementDetail(id)
  }
}
