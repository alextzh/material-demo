import {AfterViewInit, Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {NoticeService, position} from "../service/notice.service";
import {findPosition} from "../validator/validators";
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  private isShow:boolean = false;
  private total:number = 0;
  constructor(private noticeService:NoticeService,private elementRef:ElementRef) {
    $(document).ready(function () {
      $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        }
      )
    })
  }
  ngOnInit() {
    this.noticeService.cartEvent.subscribe(
      value => {
        this.isShow = value;
        if (this.isShow){
          this.setCartPosition();
        }
      }
    );
    this.noticeService.cartCount$.subscribe(
      num => {
        this.total = num
      }
    )
  }
  ngAfterViewInit(){
    if (this.isShow){
      this.setCartPosition();
    }
  }
  @HostListener('window:resize',['$event'])
  onResize($event:any){
      this.setCartPosition();
  }
  setCartPosition(){
    let cartDiv = this.elementRef.nativeElement.querySelector('#v-cart');
    let x = findPosition(cartDiv)[0];
    let y = findPosition(cartDiv)[1];
    this.noticeService.changePosition(new position(x,y));
    console.log(x, y);
  }
}
