import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtTransferComponent } from './bought-transfer.component';

describe('BoughtTransferComponent', () => {
  let component: BoughtTransferComponent;
  let fixture: ComponentFixture<BoughtTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
