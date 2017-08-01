import {AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {TeamList, TransferItemService} from '../../service/transfer-item.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-lsyj-list',
  templateUrl: './lsyj-list.component.html',
  styleUrls: ['./lsyj-list.component.css']
})
export class LsyjListComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') input: ElementRef;
  private lists: TeamList[];
  private errorMessage: string;
  private totalRecords: number;
  private rows: number = 6;
  private pagedLists: any[];
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(private renderer: Renderer, private transferItemService: TransferItemService) {

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.keyword = value;
        this.transferItemService.getTeamList(value)
          .subscribe(
            items => {
              this.lists = items.filter(item => item.teamName.indexOf(value) !== -1);
              this.totalRecords = this.lists.length;
              this.pagedLists = this.lists.slice(0, this.rows);
            },
            error => this.errorMessage = <any>error
          );
      });
  }
  getTeamlists() {
    this.transferItemService.getTeamList()
      .subscribe(
        items => {
          this.lists = items;
          this.totalRecords = items.length;
          this.pagedLists = items.slice(0, this.rows);
        },
        error => this.errorMessage = <any>error
      );
  }
  ngOnInit() {
    this.getTeamlists();
  }
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }
  setPage($event) {
    this.rows = $event.rows;
    this.pagedLists = this.lists.slice($event.first, ($event.page + 1) * $event.rows);
  }
}
