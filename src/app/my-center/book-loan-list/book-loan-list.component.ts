import { Component, OnInit } from '@angular/core';
import {BookLoanList, TransferItemService} from "../../service/transfer-item.service";
import swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-book-loan-list',
  templateUrl: './book-loan-list.component.html',
  styleUrls: ['./book-loan-list.component.css']
})
export class BookLoanListComponent implements OnInit {
  private lists:BookLoanList[];
  private errorMessage:string;
  private totalRecords:number;
  private rows:number = 6;
  private pagedLists:any[];
  constructor(private transferItemService:TransferItemService) {
    $(document).ready(function () {
      $('#bookloanTabs').tabs();
    });
  }
  getBookLoanList(str?:string){
    this.transferItemService.getBookLoanList()
      .subscribe(
        items => {
          this.lists = str? items.filter(item => item.state == str) : items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0,this.rows);
        },
        error => this.errorMessage = <any>error
      )
  }
  ngOnInit() {
    this.getBookLoanList();
  }
  setPage($event){
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first,($event.page + 1)*$event.rows);
  }
  eventTrigger(id:number,name:string){
    if (name == '--'){
      return;
    }else if (name == '申请赎回本金'){
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
      }).then(function() {
        swal(
          '恭喜您!',
          '赎回本金成功',
          'success'
        )
      },function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次赎回',
            'error'
          )
        }
      })
    }else if (name == '申请转让'){
      swal({
        title: '确定要转让吗',
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
      }).then(function() {
        swal(
          '恭喜您!',
          '转让成功',
          'success'
        )
      },function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次转让',
            'error'
          )
        }
      })
    }else if (name == '下载签名合同'){
      swal({
        title: '确定要下载签名合同吗',
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
      }).then(function() {
        swal(
          '恭喜您!',
          '下载签名合同成功',
          'success'
        )
      },function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次下载',
            'error'
          )
        }
      })
    }else if (name == '下载原合同'){
      swal({
        title: '确定要下载原合同吗',
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
      }).then(function() {
        swal(
          '恭喜您!',
          '下载原合同成功',
          'success'
        )
      },function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            '很遗憾！',
            '您已取消本次下载',
            'error'
          )
        }
      })
    }
  }
}
