import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NoticeService} from '../../service/notice.service';
declare const $: any;
@Component({
  selector: 'app-ptgg-detail',
  templateUrl: './ptgg-detail.component.html',
  styleUrls: ['./ptgg-detail.component.css']
})
export class PtggDetailComponent implements OnInit {
  private content: string;
  private errorMessage: string;
  private title: string;
  constructor(private routerInfo: ActivatedRoute, private noticeService: NoticeService) { }
  getPlatformDetail(id: string) {
    this.noticeService.getPlatformDetail(id)
      .subscribe(
        item => {
          this.content = item.content;
          this.title = item.title;
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    const id: string = this.routerInfo.snapshot.params['id'];
    this.getPlatformDetail(id);
  }
}
