import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileValidator} from "../../validator/validators";
import {NoticeService} from "../../service/notice.service";
import {Router} from "@angular/router";

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel:FormGroup;
  private isRight:boolean = false;
  private count:number = 60;
  private isSend:boolean = false;
  private code:string = '';
  constructor(fb:FormBuilder,private noticeService:NoticeService,private router:Router) {
    this.formModel = fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',mobileValidator],
      passwordGroup: fb.group({
        password:['',[Validators.required,Validators.minLength(6)]],
        confirmPassword:['',Validators.required]
      },{validator:equalValidator}),
      checked:['',Validators.required]
    });
    this.noticeService.codeEvent.subscribe(
      value => this.isRight = value
    )
  }

  ngOnInit() {

  }
  onRegister(){
    if (this.formModel.valid){
      this.router.navigate(['/user/certification'])
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
