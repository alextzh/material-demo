import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  private isChecked:boolean = true;
  constructor() {
    $(document).ready(function() {
      $('select').material_select();
      $('.caret').html('<i class="material-icons" style="color:#9e9e9e;margin-top:-5px;">keyboard_arrow_down</i>');
    });
  }
  oldType(){
    $("#oldCard").prop("checked",true);
    $("#newCard").prop("checked",false);
    this.isChecked = true;
  }
  newType(){
    $("#newCard").prop("checked",true);
    $("#oldCard").prop("checked",false);
    this.isChecked = false;
  }
  ngOnInit() {
  }

}
