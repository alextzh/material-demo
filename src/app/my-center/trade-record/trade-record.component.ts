import { Component, OnInit } from '@angular/core';
import {RechargeRecord, TradeRecord, TransferItemService, WithdrawRecord} from '../../service/transfer-item.service';
declare const $: any;
@Component({
  selector: 'app-trade-record',
  templateUrl: './trade-record.component.html',
  styleUrls: ['./trade-record.component.css']
})
export class TradeRecordComponent implements OnInit {
  private errorMessage: string;
  private rechargeErrorMessage: string;
  private withdrawErrorMessage: string;
  // 收支明细
  private tradeRows: number = 6;
  private tradeTotalRecords: number;
  private tradePageLists: any[];
  private tradeLists: TradeRecord[];
  // 充值记录
  private rechargeRows: number = 6;
  private rechargeTotalRecords: number;
  private rechargePageLists: any[];
  private rechargeLists: RechargeRecord[];
  // 提现记录
  private withdrawRows: number = 6;
  private withdrawTotalRecords: number;
  private withdrawPageLists: any[];
  private withdrawLists: WithdrawRecord[];
  constructor(private transferItemService: TransferItemService) {
    $(document).ready(function() {
      $('select').material_select();
      $('.caret').html('<i class="material-icons" style="color:#9e9e9e;margin-top:-5px;">keyboard_arrow_down</i>');
      $('#tradeTabs').tabs();
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 60 // Creates a dropdown of 15 years to control year
      });
    });
  }
  // 收支明细
  getTradeRecord() {
    this.transferItemService.getTradeRecord()
      .subscribe(
        items => {
          this.tradeLists = items;
          this.tradeTotalRecords = this.tradeLists.length;
          this.tradePageLists = this.tradeLists.slice(0, this.tradeRows);
        },
        error => this.errorMessage = <any>error
      );
  }
  // 充值记录
  getRechargeList() {
    this.transferItemService.getRechargeRecord()
      .subscribe(
        items => {
          this.rechargeLists = items;
          this.rechargeTotalRecords = this.rechargeLists.length;
          this.rechargePageLists = this.rechargeLists.slice(0, this.rechargeRows);
        },
        error => this.rechargeErrorMessage = <any>error
      );
  }
  // 提现记录
  getWithdrawList() {
    this.transferItemService.getWithdrawRecord()
      .subscribe(
        items => {
          this.withdrawLists = items;
          this.withdrawTotalRecords = this.withdrawLists.length;
          this.withdrawPageLists = this.withdrawLists.slice(0, this.withdrawRows);
        },
        error => this.withdrawErrorMessage = <any>error
      );
  }
  ngOnInit() {
    this.getTradeRecord();
    this.getRechargeList();
    this.getWithdrawList();
  }
  setTradePage($event) {
    this.tradeRows = $event.rows;
    this.tradePageLists = this.tradeLists.slice($event.first, ($event.page + 1) * $event.rows);
  }
  setRechargePage($event) {
    this.rechargeRows = $event.rows;
    this.rechargePageLists = this.rechargeLists.slice($event.first, ($event.page + 1) * $event.rows);
  }
  setWithdrawPage($event) {
    this.withdrawRows = $event.rows;
    this.withdrawPageLists = this.withdrawLists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
