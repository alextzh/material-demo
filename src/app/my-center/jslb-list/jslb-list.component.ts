import {AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {BalanceList, TransferItemService} from "../../service/transfer-item.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-jslb-list',
  templateUrl: './jslb-list.component.html',
  styleUrls: ['./jslb-list.component.css']
})
export class JslbListComponent implements OnInit,AfterViewInit {
  @ViewChild('myInput') input:ElementRef;
  private lists:BalanceList[];
  private errorMessage:string;
  private totalRecords:number;
  private rows:number = 6;
  private pagedLists:any[];
  private nameFilter:FormControl = new FormControl();
  private keyword:string;
  constructor(private renderer:Renderer,private transferItemService:TransferItemService) {
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.keyword = value;
        this.transferItemService.getBalanceList(value)
          .subscribe(
            items => {
              this.lists = items.filter(item => item.loanName.indexOf(value) != -1);
              this.totalRecords = this.lists.length;
              this.pagedLists = this.lists.slice(0,this.rows)
            }
          )
      })
  }
  getBlanceList(){
    this.transferItemService.getBalanceList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = this.lists.length;
          this.pagedLists = this.lists.slice(0,this.rows)
        }
      )
  }
  ngOnInit() {
    this.getBlanceList();
  }
  ngAfterViewInit(){
    this.renderer.invokeElementMethod(this.input.nativeElement,'focus')
  }
  setPage($event){
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first,($event.page + 1)*$event.rows);
  }
}
