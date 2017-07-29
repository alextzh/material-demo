import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsyjListComponent } from './lsyj-list.component';

describe('LsyjListComponent', () => {
  let component: LsyjListComponent;
  let fixture: ComponentFixture<LsyjListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsyjListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsyjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
