import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInvestListComponent } from './day-invest-list.component';

describe('DayInvestListComponent', () => {
  let component: DayInvestListComponent;
  let fixture: ComponentFixture<DayInvestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayInvestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInvestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
