import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  //显示分页按钮数量
  @Input() pageLinkSize: number = 5;
  //点击按钮后向父组件发送事件
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @Input() style: any;
  //调整每页显示条目数量的下拉菜单
  @Input() rowsPerPageOptions: number[];
  //是否显示分页
  @Input() alwaysShow: boolean = true;
  //定义分页按钮
  public pageLinks: number[];

  public _totalRecords: number = 0;

  public _first: number = 0;

  public _rows: number = 0;
  //数据总数
  @Input() get totalRecords(): number {
    return this._totalRecords;
  }

  set totalRecords(val:number) {
    this._totalRecords = val;
    this.updatePageLinks();
  }
  //高亮按钮位置
  @Input() get first(): number {
    return this._first;
  }

  set first(val:number) {
    this._first = val;
    this.updatePageLinks();
  }
  //每页数量
  @Input() get rows(): number {
    return this._rows;
  }

  set rows(val:number) {
    this._rows = val;
    this.updatePageLinks();
  }
  //获取一共多少页
  getPageCount() {
    return Math.ceil(this.totalRecords/this.rows)||1;
  }
  //是否为第一页
  isFirstPage() {
    return this.getPage() === 0;
  }
  //是否为最后一页
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  //确定当先需要显示的起始分页和结束分页
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(),
      visiblePages = Math.min(this.pageLinkSize, numberOfPages);

    //calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))),
      end = Math.min(numberOfPages - 1, start + visiblePages - 1);

    //check when approaching to last page
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    return [start, end];
  }
  //更新需要显示的分页条目
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(),
      start = boundaries[0],
      end = boundaries[1];

    for(let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
  }
  //点击分页
  changePage(p :number, event) {
    var pc = this.getPageCount();

    if(p >= 0 && p < pc) {
      this.first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();

      this.onPageChange.emit(state);
    }

    if(event) {
      event.preventDefault();
    }
  }

  getPage(): number {
    return Math.floor(this.first / this.rows);
  }
  //第一页
  changePageToFirst(event) {
    this.changePage(0, event);
  }
  //上一页
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1, event);
  }
  //下一页
  changePageToNext(event) {
    this.changePage(this.getPage()  + 1, event);
  }
  //最后一页
  changePageToLast(event) {
    this.changePage(this.getPageCount() - 1, event);
  }
  //通过下拉菜单更改每页显示数量
  onRppChange(event) {
    this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
    this.changePageToFirst(event);
  }
  constructor() {

  }

  ngOnInit() {
  }

}
