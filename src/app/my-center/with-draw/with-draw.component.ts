import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-with-draw',
  templateUrl: './with-draw.component.html',
  styleUrls: ['./with-draw.component.css']
})
export class WithDrawComponent implements OnInit {

  constructor() {
    $(document).ready(function() {
      $('select').material_select();
      $('.caret').html('<i class="material-icons" style="color:#9e9e9e;margin-top:-5px;">keyboard_arrow_down</i>');
    });

  }

  ngOnInit() {
  }

}
