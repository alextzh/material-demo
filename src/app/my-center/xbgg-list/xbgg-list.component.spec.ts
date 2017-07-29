import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbggListComponent } from './xbgg-list.component';

describe('XbggListComponent', () => {
  let component: XbggListComponent;
  let fixture: ComponentFixture<XbggListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbggListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
