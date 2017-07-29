import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YjggListComponent } from './yjgg-list.component';

describe('YjggListComponent', () => {
  let component: YjggListComponent;
  let fixture: ComponentFixture<YjggListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YjggListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YjggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
