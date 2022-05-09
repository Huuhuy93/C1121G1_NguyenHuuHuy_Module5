import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSimpleComponent } from './calculator-simple.component';

describe('CalculatorSimpleComponent', () => {
  let component: CalculatorSimpleComponent;
  let fixture: ComponentFixture<CalculatorSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
