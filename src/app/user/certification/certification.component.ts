import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {cardCodeValidator, realNameValidator} from "../../validator/validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  formModel:FormGroup;
  constructor(fb:FormBuilder,private router:Router) {
    this.formModel = fb.group({
      realName:['',realNameValidator],
      cardCode:['',cardCodeValidator]
    })
  }

  ngOnInit() {

  }
  onValidate(){
    if (this.formModel.valid){
      console.log(this.formModel.value);
      this.router.navigate(['/user'])
    }
  }
}
