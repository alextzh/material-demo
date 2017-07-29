import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValicateCodeComponent } from './valicate-code.component';

describe('ValicateCodeComponent', () => {
  let component: ValicateCodeComponent;
  let fixture: ComponentFixture<ValicateCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValicateCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValicateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
