import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransferListComponent } from './my-transfer-list.component';

describe('MyTransferListComponent', () => {
  let component: MyTransferListComponent;
  let fixture: ComponentFixture<MyTransferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
