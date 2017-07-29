import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbggDetailComponent } from './xbgg-detail.component';

describe('XbggDetailComponent', () => {
  let component: XbggDetailComponent;
  let fixture: ComponentFixture<XbggDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbggDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbggDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
