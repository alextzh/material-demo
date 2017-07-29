import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyCenterComponent } from './my-center/my-center.component';
import { AccountCenterComponent } from './my-center/account-center/account-center.component';
import { YjggListComponent } from './my-center/yjgg-list/yjgg-list.component';
import { LsyjListComponent } from './my-center/lsyj-list/lsyj-list.component';
import { JslbListComponent } from './my-center/jslb-list/jslb-list.component';
import { XbggListComponent } from './my-center/xbgg-list/xbgg-list.component';
import { PtggListComponent } from './my-center/ptgg-list/ptgg-list.component';
import { TradeRecordComponent } from './my-center/trade-record/trade-record.component';
import { RechargeComponent } from './my-center/recharge/recharge.component';
import { WithDrawComponent } from './my-center/with-draw/with-draw.component';
import { BankCardComponent } from './my-center/bank-card/bank-card.component';
import { AgreementModelComponent } from './my-center/agreement-model/agreement-model.component';
import { BookLoanListComponent } from './my-center/book-loan-list/book-loan-list.component';
import { DayInvestListComponent } from './my-center/day-invest-list/day-invest-list.component';
import { MyTransferListComponent } from './my-center/my-transfer-list/my-transfer-list.component';
import { BoughtTransferComponent } from './my-center/bought-transfer/bought-transfer.component';
import { LuckDrawListComponent } from './my-center/luck-draw-list/luck-draw-list.component';
import { MyCouponComponent } from './my-center/my-coupon/my-coupon.component';
import { RiskTestComponent } from './my-center/risk-test/risk-test.component';
import { AccountSafeComponent } from './my-center/account-safe/account-safe.component';
import { ProjectTransferComponent } from './project-transfer/project-transfer.component';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { OrderComponent } from './order/order.component';
import { Code404Component } from './code404/code404.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { LayoutComponent } from './layout/layout.component';
import { CertificationComponent } from './user/certification/certification.component';
import {TransferItemService} from "./service/transfer-item.service";
import { PaginatorComponent } from './paginator/paginator.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ItemListComponent } from './my-center/item-list/item-list.component';
import { StageListComponent } from './my-center/stage-list/stage-list.component';
import {NoticeService} from "./service/notice.service";
import { AgreementDetailComponent } from './my-center/agreement-detail/agreement-detail.component';
import { PtggDetailComponent } from './my-center/ptgg-detail/ptgg-detail.component';
import { XbggDetailComponent } from './my-center/xbgg-detail/xbgg-detail.component';
import { ValicateCodeComponent } from './valicate-code/valicate-code.component';
import {Ng2Echarts} from "ng2-echarts";
import { IsLastDirective } from './directive/is-last.directive';
import { ShoppingComponent } from './shopping/shopping.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyCenterComponent,
    AccountCenterComponent,
    YjggListComponent,
    LsyjListComponent,
    JslbListComponent,
    XbggListComponent,
    PtggListComponent,
    TradeRecordComponent,
    RechargeComponent,
    WithDrawComponent,
    BankCardComponent,
    AgreementModelComponent,
    BookLoanListComponent,
    DayInvestListComponent,
    MyTransferListComponent,
    BoughtTransferComponent,
    LuckDrawListComponent,
    MyCouponComponent,
    RiskTestComponent,
    AccountSafeComponent,
    ProjectTransferComponent,
    CashManagementComponent,
    OrderComponent,
    Code404Component,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPwdComponent,
    LayoutComponent,
    CertificationComponent,
    PaginatorComponent,
    FilterPipe,
    ItemListComponent,
    StageListComponent,
    AgreementDetailComponent,
    PtggDetailComponent,
    XbggDetailComponent,
    ValicateCodeComponent,
    Ng2Echarts,
    IsLastDirective,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule


  ],
  providers: [TransferItemService,NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
