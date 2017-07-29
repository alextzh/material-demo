import { Component, OnInit } from '@angular/core';
import {DayInvestList, TransferItemService} from "../../service/transfer-item.service";
import swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-day-invest-list',
  templateUrl: './day-invest-list.component.html',
  styleUrls: ['./day-invest-list.component.css']
})
export class DayInvestListComponent implements OnInit {
  private lists:DayInvestList[];
  private totalRecords:number;
  private rows:number = 6;
  private pagedLists:any[];
  private errorMessage:string;
  constructor(private transferItemService:TransferItemService) {
    $(document).ready(function () {
      $('#dayInvestTabs').tabs();
    });
  }
  getDayInvestList(str?:string){
    this.transferItemService.getDayInvestList()
      .subscribe(
        items => {
          this.lists = str? items.filter(item => item.state == str): items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0,this.rows);
        },
        error => this.errorMessage = <any>error
      )
  }
  ngOnInit() {
    this.getDayInvestList();
  }
  setPage($event){
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first,($event.page + 1)*$event.rows)
  }
  eventTrigger(id:number,name:string) {
    if (name == '--') {
      return;
    } else if (name == '赎回') {
      swal({
        title: '确定要申请赎回本金吗',
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
          '赎回本金成功',
          'success'
        );
      },function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次赎回',
            'error'
          )
        }
      })
    }
  }
}
