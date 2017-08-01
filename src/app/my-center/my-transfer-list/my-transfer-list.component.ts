import { Component, OnInit } from '@angular/core';
import {TransferItemService, TransferList} from '../../service/transfer-item.service';
import swal from 'sweetalert2';
declare const $: any;
@Component({
  selector: 'app-my-transfer-list',
  templateUrl: './my-transfer-list.component.html',
  styleUrls: ['./my-transfer-list.component.css']
})
export class MyTransferListComponent implements OnInit {
  private lists: TransferList[];
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];
  private errorMessage: string;
  constructor(private transferItemService: TransferItemService) {
    $(document).ready(function () {
      $('#transferTabs').tabs();
    });
  }
  getTransferList(str?: string) {
    this.transferItemService.getTransferList()
      .subscribe(
        items => {
          this.lists = str ? items.filter(item => item.state === str) : items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    this.getTransferList();
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
  eventTrigger(id: number, name: string) {
    if (name === '--') {
      return;
    } else if (name === '撤销转让') {
      swal({
        title: '确定要申请撤销转让吗',
        text: '',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonClass: 'btn waves-effect waves-light btn-success',
        cancelButtonClass: 'btn waves-effect waves-light btn-danger',
        buttonsStyling: false
      }).then(function () {
        swal(
          '恭喜您!',
          '撤销转让成功',
          'success'
        );
      }, function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次撤销',
            'error'
          );
        }
      });
    }
  }
}
