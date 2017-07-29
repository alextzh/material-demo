import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTestComponent } from './risk-test.component';

describe('RiskTestComponent', () => {
  let component: RiskTestComponent;
  let fixture: ComponentFixture<RiskTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
