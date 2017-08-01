import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appIsLast]'
})
export class IsLastDirective implements OnInit  {
  @Input() isLast: boolean;
  @Output() lastDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {
    if (this.isLast) {
      this.lastDone.emit(true);
    }
  }
}
/*使用ngFor,循环结束后的事件可以这样写*/
// <div *ngFor="let item of items; let last = last" [isLast]="last" (lastDone)="printMsg()">
