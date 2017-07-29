import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtggListComponent } from './ptgg-list.component';

describe('PtggListComponent', () => {
  let component: PtggListComponent;
  let fixture: ComponentFixture<PtggListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtggListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
