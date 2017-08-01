import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import {Img, NoticeService, position} from '../service/notice.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
declare const $: any;

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  animations: [
    trigger('imageState', [
      state('original', style({

        })
      ),
      state('added', style({
          'top': '10px',
          'right': '10px',
          'width': '20px',
          'height': '20px',
          'position': 'absolute'
        })
      ),
      transition('original => added', animate('800ms linear'))
    ])
  ]
})
export class ShoppingComponent implements OnInit {
  private isShow: boolean = true;
  private imgs: Img[];
  public cartPosition: position = null;
  constructor(private noticeService: NoticeService, private elementRef: ElementRef, private renderer: Renderer) { }
  getImgs() {
    this.noticeService.getImgs()
      .subscribe(
        items => {
          this.imgs = items;
        }
      );
  }
  ngOnInit() {
    this.getImgs();
    this.noticeService.cartEvent.emit(this.isShow);
    this.noticeService.cartPosition$.subscribe(
      position => {
        this.cartPosition = position;
        console.log(position);
      }
    );
    if (!this.cartPosition) {
      this.cartPosition = this.noticeService.firstPosition;
    }
  }
  addToCart(img: any) {
    for (const item of this.imgs){
      if (item.id === img.id) {
        if (item.state === 'added') {
          return;
        }else {
          item.state = 'added';
          break;
        }
      }
    }
    const imgToCopy = this.elementRef.nativeElement.querySelector(`#img_${img.id}`);
    const imgParent = imgToCopy.parentElement;
    const imgClone = imgToCopy.cloneNode(false);
    console.log(imgToCopy.offsetLeft, imgToCopy.offsetTop);
    this.renderer.setElementStyle(imgClone, 'position', 'absolute');
    this.renderer.setElementStyle(imgClone, 'left', `${imgToCopy.offsetLeft}px`);
    this.renderer.setElementStyle(imgClone, 'top', `${imgToCopy.offsetTop}px`);
    this.renderer.setElementStyle(imgClone, 'width', `${imgToCopy.width}px`);
    this.renderer.setElementStyle(imgClone, 'height', `${imgToCopy.height}px`);
    this.renderer.setElementStyle(imgClone, 'z-index', '100');
    imgClone.setAttribute('id', `img_clone_${img.id}`);
    imgParent.appendChild(imgClone);
    $(`#img_clone_${img.id}`).animate({
      'top': this.cartPosition.y,
      'left':  this.cartPosition.x,
      'width': 0,
      'height': 0
    }, 500, 'linear');
    setTimeout(() => {
      this.noticeService.total += 1;
      this.noticeService.changeCartCount(this.noticeService.total);
    }, 500);
  }

}
