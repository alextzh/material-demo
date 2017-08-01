import {AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {TransferItem, TransferItemService} from '../service/transfer-item.service';
import {FormControl} from '@angular/forms';
import swal from 'sweetalert2';
import 'rxjs/Rx';
import {NoticeService} from '../service/notice.service';
declare const $: any;
@Component({
  selector: 'app-project-transfer',
  templateUrl: './project-transfer.component.html',
  styleUrls: ['./project-transfer.component.css']
})
export class ProjectTransferComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  private items: TransferItem[];
  private errorMessage: string;
  private totalRecords: number;
  private rows: number = 6;
  private pagedItems: TransferItem[];
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  private isShow: boolean = false;
  constructor(private renderer: Renderer, private transferItemService: TransferItemService, private noticeService: NoticeService) {
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.keyword = value;
        this.transferItemService.getTransferItemList(value)
          .subscribe(
            items => {
              this.items = items.filter(item => item.itemName.indexOf(value) !== -1);
              this.totalRecords = this.items.length;
              this.pagedItems = this.items.slice(0, this.rows);
            },
            error => this.errorMessage = <any>error
          );
      });
  }
  getTransferItems() {
    this.transferItemService.getTransferItemList()
      .subscribe(
        items => {
          this.items = items;
          this.totalRecords = this.items.length;
          this.pagedItems = this.items.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }


  ngOnInit() {
    this.getTransferItems();
    this.noticeService.cartEvent.emit(this.isShow);
  }
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedItems = this.items.slice($event.first, ($event.page + 1) * $event.rows);
  }
  purchase(id: number) {
    swal({
      title: '确定要购买吗?',
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
        '购买成功',
        'success'
      );
    }, function (dismiss) {
      if (dismiss === 'cancel') {
        swal(
          '很遗憾',
          '您已取消本次购买',
          'error'
        );
      }
    });
  }
}

