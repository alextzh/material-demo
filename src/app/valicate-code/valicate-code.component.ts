import { Component, OnInit } from '@angular/core';
import { randomColor, randomNum} from "../validator/validators";
import {FormControl} from "@angular/forms";
import {NoticeService} from "../service/notice.service";
declare var $:any;
@Component({
  selector: 'app-valicate-code',
  templateUrl: './valicate-code.component.html',
  styleUrls: ['./valicate-code.component.css']
})
export class ValicateCodeComponent implements OnInit {
  code:string = '';
  isRight:boolean = true;
  private codeFilter:FormControl = new FormControl();
  constructor(private noticeService:NoticeService) {
    this.codeFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => {
          if (this.code.toLowerCase() === value){
            this.isRight = true;
          }else{
            this.isRight = false;
          }
          this.noticeService.codeEvent.emit(this.isRight);
        }
      );

  }

  ngOnInit() {
    this.refreshCode();
  }

  refreshCode(){
    let code = '';
    let canvas = $("#codeCanvas");
    let txtArr:any[] = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
      'S','T','U','V','W','X','Y','Z'];//随机数
    let ctx = canvas.get(0).getContext('2d');
    ctx.textBaseline = "middle";
    ctx.fillStyle = randomColor(180, 240);
    ctx.fillRect(0, 0, canvas.width(), canvas.height());
    for(let i = 1; i <= 4; i++) {
      let txt = txtArr[randomNum(0, txtArr.length)];
      code += txt;
      ctx.font = randomNum(canvas.height()/2, canvas.height()) + 'px SimHei'; //随机生成字体大小
      ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
      ctx.shadowOffsetX = randomNum(-3, 3);
      ctx.shadowOffsetY = randomNum(-3, 3);
      ctx.shadowBlur = randomNum(-3, 3);
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      let x = canvas.width() / 5 * i;
      let y = canvas.height() / 2;
      let deg = randomNum(-30, 30);
      /**设置旋转角度和坐标原点**/
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(txt, 0, 0);
      /**恢复旋转角度和坐标原点**/
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    }
    /**绘制干扰线**/
    for(let i = 0; i < 4; i++) {
      ctx.strokeStyle = randomColor(40, 180);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, canvas.width()), randomNum(0, canvas.height()));
      ctx.lineTo(randomNum(0, canvas.width()), randomNum(0, canvas.height()));
      ctx.stroke();
    }
    /**绘制干扰点**/
    for(let i = 0; i < canvas.width()/4; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, canvas.width()), randomNum(0, canvas.height()), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
    this.code = code;
    return code;
  }
}
