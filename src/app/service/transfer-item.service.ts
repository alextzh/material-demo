import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class TransferItemService {


  constructor(public http: Http) { }
  // 获取转让项目列表
  getTransferItemList(str?: string): Observable<TransferItem[]> {
    return this.http.get(`/layout/projectTransfer`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取团队列表
  getTeamList(str?: string): Observable<TeamList[]> {
    return this.http.get(`/layout/lsyjList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取项目列表
  getItemList(id: number): Observable<TeamList> {
    return this.http.get(`/layout/itemList/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取项目阶段收益列表
  getStageList(id: number): Observable<StageList[]> {
    return this.http.get(`/layout/stageList/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取结算列表
  getBalanceList(str?: string): Observable<BalanceList[]> {
    return this.http.get(`/layout/jslbList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取交易记录
  getTradeRecord(): Observable<TradeRecord[]> {
    return this.http.get(`/layout/tradeRecord`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取充值记录
  getRechargeRecord(): Observable<RechargeRecord[]> {
    return this.http.get(`/layout/tradeRecord/recharge`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取提现记录
  getWithdrawRecord(): Observable<WithdrawRecord[]> {
    return this.http.get(`/layout/tradeRecord/withdraw`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取预约记录
  getBookLoanList(): Observable<BookLoanList[]> {
    return this.http.get(`/layout/bookLoanList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取我的现金管理
  getDayInvestList(): Observable<DayInvestList[]> {
    return this.http.get(`/layout/dayInvestList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取停牌份额列表
  getTransferList(): Observable<TransferList[]> {
    return this.http.get(`/layout/myTransferList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取停牌购买列表
  getBoughtTransferList(): Observable<BoughtTransferList[]> {
    return this.http.get(`/layout/boughtTransfer`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取风险测评
  getRiskTestList(): Observable<RiskTest[]> {
    return this.http.get(`/layout/riskTest`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
export class TransferItem {
  constructor(
    public itemId: number,
    public itemName: string,
    public transferTime: string,
    public transferPrice: number
  ) {}
}

export class TradeRecord {
  constructor(
    public itemId: number,
    public tradeType: string,
    public tradeTime: string,
    public tradePrice: number,
    public tradeAbstract: string
  ) {}
}
export class RechargeRecord {
  constructor(
    public itemId: number,
    public rechargeNo: string,
    public rechargeTime: string,
    public rechargePrice: number,
    public rechargeState: string
  ) {}
}
export class WithdrawRecord {
  constructor(
    public itemId: number,
    public withdrawNo: string,
    public withdrawTime: string,
    public withdrawPrice: number,
    public withdrawState: string,
    public withdrawBankCard: string
  ) {}
}

export class TeamList {
  constructor(
    public teamNo: number,
    public teamName: string,
    public teamDesc: string,
    public itemList: LoanList[]
  ) {}
}
export class LoanList {
  constructor(
    public loanNo: number,
    public loanName: string,
    public loanDate: string,
    public opeAmt: number,
    public riskAmt: number,
    public bookingAmt: number,
    public bookingCount: number,
    public type: string
  ) {}
}
export class StageList {
  constructor(
    public loanNo: number,
    public repayDate: string,
    public loanName: string,
    public stockAmt: number,
    public investRate: number,
    public opeRate: number,
    public bankInfo: string
  ) {}
}
export class BalanceList {
  constructor(
    public loanNo: number,
    public loanName: string,
    public repayDate: string,
    public investRate: number,
    public operateRate: number,
    public stockAmt: number,
    public backInfo: string
  ) {}
}



export class BookLoanList {
  constructor(
    public bookId: number,
    public state: string,
    public bookTime: string,
    public bookState: string,
    public bookPrice: number,
    public bookRepay: number,
    public bookAbstract: string,
    public handles: Handle[],
    public isContract: string,
    public isSign?: string
  ) {}
}
export class Handle {
  constructor(
    public name: string
  ) {}
}
export class DayInvestList {
  constructor(
    public id: number,
    public state: string,
    public time: string,
    public manageState: string,
    public managePrice: number,
    public abstract: string,
    public handle: string
  ) {}
}
export class TransferList {
  constructor(
    public id: number,
    public state: string,
    public time: string,
    public transferState: string,
    public transferPrice: number,
    public abstract: string,
    public handle: string
  ) {}
}
export class BoughtTransferList {
  constructor(
    public id: number,
    public state: string,
    public time: string,
    public transferState: string,
    public transferPrice: number,
    public abstract: string
  ) {}
}
export class RiskTest {
  constructor(
    public id: number,
    public title: string,
    public content: RiskTestItem[]
  ) {}
}
export class RiskTestItem {
  constructor(
    public itemId: number,
    public itemContent: string
  ) {}
}
