import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JslbListComponent } from './jslb-list.component';

describe('JslbListComponent', () => {
  let component: JslbListComponent;
  let fixture: ComponentFixture<JslbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JslbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JslbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
