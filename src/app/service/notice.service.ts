import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class NoticeService {
  codeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  cartEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  cartPosition: Subject<position> = new Subject<position>();
  cartCount: Subject<number> = new Subject<number>();
  cartPosition$ = this.cartPosition.asObservable();
  cartCount$ = this.cartCount.asObservable();
  firstPosition: position;
  total: number = 0;
  constructor(public http: Http) {

  }
  changePosition(position: position) {
    this.cartPosition.next(position);
    this.firstPosition = position;
  }
  changeCartCount(num: number) {
    this.cartCount.next(num);
  }

  getImgs(): Observable<Img[]> {
    return this.http.get(`/layout/shopping`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取平台公告列表
  getPlatformList(): Observable<PlatformList[]> {
    return this.http.get(`/layout/ptggList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取平台公告详情
  getPlatformDetail(id: string): Observable<PlatformList> {
    return this.http.get(`/layout/ptggDetail/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取合同范本列表
  getAgreementModelList(): Observable<AgreementModelList[]> {
    return this.http.get(`/layout/agreementModel`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取合同范本详情
  getAgreementModelDetail(id: string): Observable<AgreementModelList> {
    return this.http.get(`/layout/agreementDetail/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取新标公告列表
  getNewNormList(): Observable<NewNormList[]> {
    return this.http.get(`/layout/xbggList`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取新标公告详情
  getNewNormDetail(id: string): Observable<NewNormList> {
    return this.http.get(`/layout/xbggDetail/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // 获取业绩公告列表
  getAchievementList(): Observable<AchievementList[]> {
    return this.http.get(`/layout/yjggList`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
export class PlatformList {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) {}
}
export class AgreementModelList {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) {}
}
export class NewNormList {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) {}
}
export class AchievementList {
  constructor(
    public id: string,
    public title: string,
    public content: string
  ) {}
}
export class Img {
  constructor(
    public id: number,
    public state: string
  ) {}
}
export class position {
  x: number;
  y: number;
  constructor(
    public xInput: number,
    public yInput: number
  ) {
    this.x = xInput;
    this.y = yInput;
  }
}
