import { Component, OnInit } from '@angular/core';
import {RiskTest, TransferItemService} from '../../service/transfer-item.service';
import swal from 'sweetalert2';
declare const $: any;
@Component({
  selector: 'app-risk-test',
  templateUrl: './risk-test.component.html',
  styleUrls: ['./risk-test.component.css']
})
export class RiskTestComponent implements OnInit {
  private testTime: Date;
  private score: number;
  private isTested: boolean = false;
  private isShowTest: boolean = false;
  private lists: RiskTest[];
  constructor(private transferItemService: TransferItemService) {
  }
  getRiskTest() {
    this.transferItemService.getRiskTestList()
      .subscribe(
        items => this.lists = items
      );
  }
  ngOnInit() {
    this.getRiskTest();
  }
  showTest() {
    this.isShowTest = true;
  }
  testSubmit() {
    let i = 0;
    $('.testItem').each(function () {
      i += $(this).find('input[type=radio]:checked').length;
    });
    if (i === 14) {
      this.isTested = true;
      this.isShowTest = false;
      this.testTime = new Date();
      this.score = this.calScore();
      if (this.score >= 30) {
        swal(
          '恭喜!',
          '您是合格的投资人! 分数为' + this.score,
          'info'
        );
      }else {
        swal(
          '很遗憾!',
          '您不是合格的投资人! 分数为' + this.score,
          'info'
        );
      }
      $('.testItem').each(function(){
        $(this).find('input[type="radio"]').prop('checked', false);
      });
    }else {
      swal(
        '未答完所有题目!',
        '请继续答题!',
        'warning'
      );
    }
  }
  calScore() {
    let _sum = 0;
    $('.testItem').each(function () {
      _sum += parseInt($(this).find('input[type=radio]:checked').prev().attr('id').split('_')[1], 10);
    });
    return _sum;
  }
}
