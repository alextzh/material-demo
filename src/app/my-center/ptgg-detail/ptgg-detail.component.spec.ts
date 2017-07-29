import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtggDetailComponent } from './ptgg-detail.component';

describe('PtggDetailComponent', () => {
  let component: PtggDetailComponent;
  let fixture: ComponentFixture<PtggDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtggDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtggDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
