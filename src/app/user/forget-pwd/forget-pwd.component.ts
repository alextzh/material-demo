import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileValidator} from "../../validator/validators";
import {Router} from "@angular/router";
import {NoticeService} from "../../service/notice.service";
declare var $:any;

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  formModel:FormGroup;
  private count:number = 60;
  private code:string = '';
  private isSend:boolean = false;
  private isRight:boolean = false;
  constructor(fb:FormBuilder,private router:Router,private noticeService:NoticeService) {
    this.formModel = fb.group({
      mobile:['',mobileValidator],
      passwordGroup: fb.group({
        password:['',[Validators.required,Validators.minLength(6)]],
        confirmPassword:['',Validators.required]
      },{validator:equalValidator})
    });
    this.noticeService.codeEvent.subscribe(
      value => this.isRight = value
    )
  }

  ngOnInit() {
  }
  onModify(){
    if (this.formModel.valid){
      this.router.navigate(['/user'])
    }
  }
  getMobileMsg(){
    if (this.formModel.get('mobile').valid){
      if (this.count == 0){
        for (let i = 0; i < 6;i++){
          this.code += parseInt((Math.random()*9).toString()).toString()
        }
        $('#phoneVerificationCode').val(this.code);
        this.count = 60;
        this.isSend = false;
        $('.mobile-code').html('重新获取验证码');
        this.code = '';
      }else{
        this.isSend = true;
        this.count--;
        $('.mobile-code').html(`请在${this.count}秒内输入验证码`);
        setTimeout(() => {
          this.getMobileMsg()
        },1000)
      }
    }
  }
}
