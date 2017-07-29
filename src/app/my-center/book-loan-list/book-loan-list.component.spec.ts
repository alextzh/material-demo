import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoanListComponent } from './book-loan-list.component';

describe('BookLoanListComponent', () => {
  let component: BookLoanListComponent;
  let fixture: ComponentFixture<BookLoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLoanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
