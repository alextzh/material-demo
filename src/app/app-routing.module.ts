import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCenterComponent} from "./my-center/my-center.component";
import {AccountCenterComponent} from "./my-center/account-center/account-center.component";
import {YjggListComponent} from "./my-center/yjgg-list/yjgg-list.component";
import {LsyjListComponent} from "./my-center/lsyj-list/lsyj-list.component";
import {JslbListComponent} from "./my-center/jslb-list/jslb-list.component";
import {XbggListComponent} from "./my-center/xbgg-list/xbgg-list.component";
import {PtggListComponent} from "./my-center/ptgg-list/ptgg-list.component";
import {TradeRecordComponent} from "./my-center/trade-record/trade-record.component";
import {RechargeComponent} from "./my-center/recharge/recharge.component";
import {WithDrawComponent} from "./my-center/with-draw/with-draw.component";
import {BankCardComponent} from "./my-center/bank-card/bank-card.component";
import {AgreementModelComponent} from "./my-center/agreement-model/agreement-model.component";
import {BoughtTransferComponent} from "./my-center/bought-transfer/bought-transfer.component";
import {MyCouponComponent} from "./my-center/my-coupon/my-coupon.component";
import {BookLoanListComponent} from "./my-center/book-loan-list/book-loan-list.component";
import {DayInvestListComponent} from "./my-center/day-invest-list/day-invest-list.component";
import {MyTransferListComponent} from "./my-center/my-transfer-list/my-transfer-list.component";
import {LuckDrawListComponent} from "./my-center/luck-draw-list/luck-draw-list.component";
import {RiskTestComponent} from "./my-center/risk-test/risk-test.component";
import {AccountSafeComponent} from "./my-center/account-safe/account-safe.component";
import {ProjectTransferComponent} from "./project-transfer/project-transfer.component";
import {CashManagementComponent} from "./cash-management/cash-management.component";
import {OrderComponent} from "./order/order.component";
import {Code404Component} from "./code404/code404.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./user/login/login.component";
import {ForgetPwdComponent} from "./user/forget-pwd/forget-pwd.component";
import {RegisterComponent} from "./user/register/register.component";
import {LayoutComponent} from "./layout/layout.component";
import {CertificationComponent} from "./user/certification/certification.component";
import {ItemListComponent} from "./my-center/item-list/item-list.component";
import {StageListComponent} from "./my-center/stage-list/stage-list.component";
import {AgreementDetailComponent} from "./my-center/agreement-detail/agreement-detail.component";
import {PtggDetailComponent} from "./my-center/ptgg-detail/ptgg-detail.component";
import {XbggDetailComponent} from "./my-center/xbgg-detail/xbgg-detail.component";
import {ShoppingComponent} from "./shopping/shopping.component";

const routes: Routes = [
  {path: '',redirectTo:'layout',pathMatch: 'full'},
  {path: 'user' ,component:UserComponent,children:[
    {path: '' ,component:LoginComponent},
    {path: 'register' ,component:RegisterComponent},
    {path: 'forgetPwd' ,component:ForgetPwdComponent},
    {path: 'certification' ,component:CertificationComponent}
  ]},
  {path: 'layout' ,component:LayoutComponent,children:[
    {path: '',component:MyCenterComponent,children:[
      {path:'',component:AccountCenterComponent},
      {path:'yjggList',component:YjggListComponent},
      {path:'lsyjList',component:LsyjListComponent},
      {path:'jslbList',component:JslbListComponent},
      {path:'xbggList',component:XbggListComponent},
      {path:'ptggList',component:PtggListComponent},
      {path:'tradeRecord',component:TradeRecordComponent},
      {path:'recharge',component:RechargeComponent},
      {path:'withDraw',component:WithDrawComponent},
      {path:'bankCard',component:BankCardComponent},
      {path:'agreementModel',component:AgreementModelComponent},
      {path:'bookLoanList',component:BookLoanListComponent},
      {path:'dayInvestList',component:DayInvestListComponent},
      {path:'myTransferList',component:MyTransferListComponent},
      {path:'boughtTransfer',component:BoughtTransferComponent},
      {path:'luckDrawList',component:LuckDrawListComponent},
      {path:'myCoupon',component:MyCouponComponent},
      {path:'riskTest',component:RiskTestComponent},
      {path:'accountSafe',component:AccountSafeComponent},
      {path:'itemList/:id',component:ItemListComponent},
      {path:'stageList/:id',component:StageListComponent},
      {path:'agreementDetail/:id',component:AgreementDetailComponent},
      {path:'ptggDetail/:id',component:PtggDetailComponent},
      {path:'xbggDetail/:id',component:XbggDetailComponent}
    ]},
    {path: 'shopping',component:ShoppingComponent},
    {path: 'projectTransfer',component:ProjectTransferComponent},
    {path: 'cashManagement',component:CashManagementComponent},
    {path: 'order',component:OrderComponent}
  ]},
  {path: '**',component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
